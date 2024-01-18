import { Component, OnInit } from '@angular/core';
import {AuthService, IUser} from "../../../shared/services";
import {HttpClient} from "@angular/common/http";
import CustomStore from "devextreme/data/custom_store";
import {PersonInfo} from "../../../shared/models/person-info";
import {CustomResponse} from "../../../shared/models/custom-response";
import {ReservoirInfoService} from "../../../shared/services/reservoir-info.service";

@Component({
  selector: 'app-person-info-form',
  templateUrl: './person-info-form.component.html',
  styleUrls: ['./person-info-form.component.scss']
})
export class PersonInfoFormComponent implements OnInit {
  dataSource: any;
  private url: string;
  private headers: any;
  user: IUser | null ;
  reservoir: number | undefined;
  reservoirs: any;

  constructor(private http:HttpClient, private authService: AuthService, private reservoirInfoService:ReservoirInfoService) {

    this.authService.getUser().then((e)=>{
      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + this.user?.token
      };
      this.reservoir = this.user?.reservoir;

      reservoirInfoService.getAllReservoir().then((e)=>{
        this.reservoirs = e;
      });
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
    postUrl = this.url + "tPersonInfo";
    const record:PersonInfo = data.values;

    const httpParams = record;
    const httpOptions = {withCredentials: true, headers: this.headers, body: httpParams};

    let result:CustomResponse = new CustomResponse();

    switch (method) {
      case 'PUT':
        result = await this.http.put<CustomResponse>(postUrl, httpParams, httpOptions).toPromise()|| result;
        break;
      case 'POST':
        result = await this.http.post<CustomResponse>(postUrl, httpParams, httpOptions).toPromise()|| result;
        break;
      case 'DELETE':
        postUrl += '/' + data.key;
        result = await this.http.delete<CustomResponse>(postUrl, httpOptions).toPromise() || result;
        break;
    }

    return result.data;
  }

  async getRecords() {
    let postUrl: string;
    postUrl = this.url + "tPersonInfo/list";

    const data:PersonInfo = {
      reservoirid:this.reservoir
    };
    const httpOptions = {withCredentials:true, headers: this.headers,body: data}

    const result = await this.http.post<CustomResponse>(postUrl, data, httpOptions).toPromise() || new CustomResponse();

    return result.data;
  }


}
