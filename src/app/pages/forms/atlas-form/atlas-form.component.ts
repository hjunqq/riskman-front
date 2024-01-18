import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import CustomStore from "devextreme/data/custom_store";
import {AuthService, IUser} from "../../../shared/services";
import {IAtlas} from "../../../shared/models/IAtlas";
import {CustomResponse} from "../../../shared/models/custom-response";

@Component({
  selector: 'app-atlas-form',
  templateUrl: './atlas-form.component.html',
  styleUrls: ['./atlas-form.component.scss']
})
export class AtlasFormComponent implements OnInit {
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
    postUrl = this.url + "tAtlas";
    const record:IAtlas = data.values;

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
        result = await this.http.delete<CustomResponse>(postUrl, httpOptions).toPromise()|| result;
        break;
    }

    return result.data;
  }

  async getRecords() {
    let postUrl: string;
    postUrl = this.url + "tAtlas";

    const data:IAtlas = {
      reservoirid: this.reservoir,
    };
    const httpOptions = {withCredentials:true, headers: this.headers}

    const result = await this.http.get<CustomResponse>(postUrl,httpOptions).toPromise()||new CustomResponse();

    return result.data;
  }
}
