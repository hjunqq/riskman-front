import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService, IUser} from "../../../shared/services";
import CustomStore from "devextreme/data/custom_store";
import {CustomResponse} from "../../../shared/models/custom-response";
import {ProjectProps} from "../../../shared/models/project-props";

@Component({
  selector: 'app-project-props-form',
  templateUrl: './project-props-form.component.html',
  styleUrls: ['./project-props-form.component.scss']
})
export class ProjectPropsFormComponent implements OnInit {
  dataSource: any;
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
    });

    this.url = this.authService.getApiUrl();

    this.dataSource = new CustomStore({
      key: 'id',
      load: () => this.getRecords(this.reservoir),
      insert: values => this.sendRequest("/", "POST", {values}),
      update: (key, values) => this.sendRequest("/", "PUT", {key, values}),
      remove: key => this.sendRequest("/", "DELETE", {key}),
    });
  }

  ngOnInit() {
  }

  async getRecords(reservoir: number | undefined) {
    let postUrl: string;
    postUrl = this.url + "tProjectProps/list";

    const data:ProjectProps = {
      reservoirid: this.user?.reservoir || 0,
    };
    const httpOptions = {withCredentials: true, headers: this.headers, body: data}

    const result = await this.http.post<CustomResponse>(postUrl, data, httpOptions).toPromise();

    return result.data;
  }

  async sendRequest(url: string, method: string = "GET", data: any = {}) {

    let postUrl : string;
    postUrl = this.url + "tProjectProps";

    const record:ProjectProps = data.values;

    record.reservoirid = this.user?.reservoir;

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
}
