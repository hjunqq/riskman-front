import {Injectable} from '@angular/core';
import {AuthService, IUser} from "./auth.service";
import {HttpClient} from "@angular/common/http";
import {PersonInfo} from "../models/person-info";
import {CustomResponse} from "../models/custom-response";
import {EmergencyManager} from "../models/emergency-manager";

@Injectable({
  providedIn: 'root'
})
export class EmergencyManagerService {
  private user: null | IUser;
  private headers: { Authorization: string };
  private reservoir: number | undefined;
  private url: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.getUser().then((e) => {
      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + this.user?.token
      };
      this.reservoir = this.user?.reservoir;
    });

    this.url = this.authService.getApiUrl();
  }

  async getEmergencyManager(): Promise<EmergencyManager[]>{
    this.user = (await this.authService.getUser())?.data;
    this.headers = {
      Authorization: 'Bearer ' + this.user?.token
    };
    this.reservoir = this.user?.reservoir;

    let person: PersonInfo[];

    let postUrl: string;
    postUrl = this.authService.getApiUrl() + "tEmergencyManager" + "/list";

    const httpParams = { "reservoirid": this.reservoir };

    const httpOptions = { withCredentials: true, headers: this.headers, body: httpParams };

    const result = await this.http.post<CustomResponse>(postUrl, httpParams, httpOptions).toPromise();

    person = result?.data || [];

    return person;
  }
}
