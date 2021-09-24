import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CustomResponse} from "../models/custom-response";
import {fakeAsync} from "@angular/core/testing";

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
  token: ""
};

@Injectable()
export class AuthService {
  private _user: IUser | null = defaultUser;

  private _api: string = "http://localhost:4200/api/";

  // private _api: string = "http://8.136.105.11:6060/api/"

  private _authUrl:string = this._api + "auth/login";


  get loggedIn(): boolean {
    // return this._user?.token !== undefined && this._user?.token !== "";

    return !!this._user;
  }

  private _lastAuthenticatedPath: string = defaultPath;
  set lastAuthenticatedPath(value: string) {
    this._lastAuthenticatedPath = value;
  }

  constructor(private router: Router, private httpClient: HttpClient) { }

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
      this.router.navigate([this._lastAuthenticatedPath]);

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
