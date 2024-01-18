import { Component, OnInit } from '@angular/core';
import {AuthService, IUser} from "../../../shared/services";
import {HttpClient} from "@angular/common/http";
import CustomStore from "devextreme/data/custom_store";
import {Settlement} from "../../../shared/models/settlement";
import {CustomResponse} from "../../../shared/models/custom-response";

@Component({
  selector: 'app-settlement-form',
  templateUrl: './settlement-form.component.html',
  styleUrls: ['./settlement-form.component.scss']
})
export class SettlementFormComponent implements OnInit {
  dataSource: any;
  private url: string;
  private headers: any;
  user: IUser | null ;
  reservoir: number | undefined;

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
    postUrl = this.url + "tSettlement";
    const record:Settlement = data.values;

    const httpParams = record;
    const httpOptions = {withCredentials: true, headers: this.headers, body: httpParams};

    let result: CustomResponse = new CustomResponse();

    switch (method) {
      case 'PUT':
        result = await this.http.put<CustomResponse>(postUrl, httpParams, httpOptions).toPromise() || new CustomResponse();
        break;
      case 'POST':
        result = await this.http.post<CustomResponse>(postUrl, httpParams, httpOptions).toPromise() || new CustomResponse();
        break;
      case 'DELETE':
        postUrl += '/' + data.key;
        result = await this.http.delete<CustomResponse>(postUrl, httpOptions).toPromise() || new CustomResponse();
        break;
    }

    return result.data;
  }

  async getRecords() {
    let postUrl: string;
    postUrl = this.url + "tSettlement/list";

    const data = {
      reservoirid:this.reservoir
    };
    const httpOptions = {withCredentials:true, headers: this.headers,body: data}

    let result: CustomResponse = new CustomResponse(); // Initialize result with a default value

    try {
      result = await this.http.post<CustomResponse>(postUrl, data, httpOptions).toPromise() || new CustomResponse();
    } catch (error) {
      console.error(error);
    }

    return result.data;
  }



}
