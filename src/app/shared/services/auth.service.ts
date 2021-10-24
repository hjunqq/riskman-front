import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {CustomResponse} from "../models/custom-response";
import {AppCookieService} from "./app-cookie.service";
import {JWTTokenService} from "./jwt-token.service";



export interface IUser {
  username: string;
  avatarUrl?: string;
  token?: string;
  reservoir?:number;
}

const defaultPath = '/';
const defaultUser = {
  username: 'Test',
  avatarUrl: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png',
  token: "" /*"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYzNDkxMTI2MX0.KunVWamDwRq5V90giF5H5zHm1IhG0sNin6adsq39k3As8etyaHqfMAfOSmdWRlxYhc5yZ5RqD6V8fxWhhhdA2g"*/, /* 2021年9月25日 */
  reservoir:11,
};

@Injectable()
export class AuthService {

  private _user: IUser | null = defaultUser;

  private _api: string = "http://localhost:4200/api/";

  // private _api: string = "http://8.136.105.11:6060/api/";

  private _authUrl:string = this._api + "auth/login";

  // private store: LocalStore;


  get loggedIn(): boolean {
    if(this._user==null){
      return false;
    }
    if(this._user?.token==="") {
      let token = this.appCookieService.get("token");
      if (token !== null) {
        this._user.token = token;
        this.jwtTokenService.setToken(token);
        let username = this.jwtTokenService.getUser();
        if (username != null) {
          this._user.username = username;
        }
        return true;
      }else{
        return false;
      }
    }else{
      return !this.jwtTokenService.isTokenExpired();
    }
    // return false;
    // return !!this._user;
  }

  private _lastAuthenticatedPath: string = defaultPath;
  set lastAuthenticatedPath(value: string) {
    this._lastAuthenticatedPath = value;
  }

  constructor(private router: Router,
              private httpClient: HttpClient,
              private appCookieService: AppCookieService,
              private jwtTokenService: JWTTokenService) { }

  async logIn(username: string, password: string, rememberMe: boolean) {

    try {
      // Send request

      let body = {
        username: username,
        password: password,
        rememberMe: rememberMe
      }

      const response = await this.httpClient.post<CustomResponse>(this._authUrl, body).toPromise();
      const token = response.data;

      console.log(username, password,rememberMe);
      this._user = { ...defaultUser, username };
      this._user.token = token;

      // this.store = new LocalStore({
      //   key:'_user',
      //   data: [this._user]
      // })

      if(rememberMe) {
        this.appCookieService.set("token", token);
      }

      await this.router.navigate([this._lastAuthenticatedPath]);

      return {
        isOk: true,
        data: this._user
      };
    }
    catch {
      return {
        isOk: false,
        message: "认证失败"
      };
    }
  }

  async getUser() {
    try {

      // Send request
      if(this._user===undefined){

        return {
          isOK: false,
          data: null
        }
      }
      return {
        isOk: true,
        data: this._user
      };
    }
    catch {
      return {
        isOk: false,
        data: null
      };
    }
  }

  async setCurrentReservoir(id: number | undefined){
    if(this._user!=null){
      this._user.reservoir = id;
    }
  }


  async createAccount(email: string, password: string) {
    try {
      // Send request
      console.log(email, password);

      this.router.navigate(['/create-account']);
      return {
        isOk: true
      };
    }
    catch {
      return {
        isOk: false,
        message: "创建账户失败"
      };
    }
  }

  async changePassword(email: string, recoveryCode: string) {
    try {
      // Send request
      console.log(email, recoveryCode);

      return {
        isOk: true
      };
    }
    catch {
      return {
        isOk: false,
        message: "修改密码失败"
      }
    }
  }

  async resetPassword(email: string) {
    try {
      // Send request
      console.log(email);

      return {
        isOk: true
      };
    }
    catch {
      return {
        isOk: false,
        message: "充值密码失败"
      };
    }
  }

  async logOut() {
    this._user = null;
    this.appCookieService.remove("token");
    this.router.navigate(['/login-form']);
  }

  getApiUrl() {
    return this._api;
  }
}

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = this.authService.loggedIn;
    const isAuthForm = [
      'login-form',
      'reset-password',
      'create-account',
      'change-password/:recoveryCode'
    ].includes(route.routeConfig?.path || defaultPath);

    if (isLoggedIn && isAuthForm) {
      this.authService.lastAuthenticatedPath = defaultPath;
      this.router.navigate([defaultPath]);
      return false;
    }

    if (!isLoggedIn && !isAuthForm) {
      this.router.navigate(['/login-form']);
    }

    if (isLoggedIn) {
      this.authService.lastAuthenticatedPath = route.routeConfig?.path || defaultPath;
    }

    return isLoggedIn || isAuthForm;
  }
}
