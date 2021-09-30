import { Component, OnInit } from '@angular/core';
import {AuthService, IUser} from "../../../shared/services";
import {HttpClient} from "@angular/common/http";
import CustomStore from "devextreme/data/custom_store";
import {PersonInfo} from "../../../shared/models/person-info";
import {CustomResponse} from "../../../shared/models/custom-response";

@Component({
  selector: 'app-emergency-manager-form',
  templateUrl: './emergency-manager-form.component.html',
  styleUrls: ['./emergency-manager-form.component.scss']
})
export class EmergencyManagerFormComponent implements OnInit {
  dataSource: any;
  private user: null | IUser;
  private headers: { Authorization: string };
  private reservoir: number | undefined;
  private url: string;

  constructor(private http:HttpClient, private authService: AuthService) {
    this.authService.getUser().then((e)=>{
      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + this.user?.token
      };
      this.reservoir = this.user?.reservoir;
    });

    this.url = this.authService.getApiUrl();

    this.dataSource = new CustomStore({
      key: 'id',
      load: () => this.getRecords(),
      insert: values => this.sendRequest("/","POST",{values}),
      update: (key,values) => this.sendRequest("/","PUT", {key,values}),
      remove: key => this.sendRequest("/","DELETE",{key}),
    });
  }

  ngOnInit() {
  }

  async sendRequest(url: string, method: string="GET", data: any= {}): Promise<any> {
    let postUrl: string;
    postUrl = this.url + "tEmergencyManager";
    const record:PersonInfo = data.values;

    const httpParams = record;
    const httpOptions = {withCredentials: true, headers: this.headers, body: httpParams};

    let result:CustomResponse = new CustomResponse();

    switch (method) {
      case 'PUT':
        result = await this.http.put<CustomResponse>(postUrl, httpParams, httpOptions).toPromise();
        break;
      case 'POST':
        result = await this.http.post<CustomResponse>(postUrl, httpParams, httpOptions).toPromise();
        break;
      case 'DELETE':
        postUrl += '/' + data.key;
        result = await this.http.delete<CustomResponse>(postUrl, httpOptions).toPromise();
        break;
    }

    return result.data;
  }

  async getRecords() {
    let postUrl: string;
    postUrl = this.url + "tEmergencyManager/list";

    const data:PersonInfo = {
      reservoirid:this.reservoir
    };
    const httpOptions = {withCredentials:true, headers: this.headers,body: data}

    const result = await this.http.post<CustomResponse>(postUrl, data, httpOptions).toPromise();

    return result.data;
  }

}
