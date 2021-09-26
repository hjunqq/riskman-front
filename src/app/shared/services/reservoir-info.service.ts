import { Injectable } from '@angular/core';
import {IReservoirInfo} from "../models/IReservoirInfo";
import {CustomResponse} from "../models/custom-response";
import {ReservoirDetail} from "../models/reservoir.detail";
import {HttpClient} from "@angular/common/http";
import {AuthService, IUser} from "./auth.service";
import {FilePath} from "../models/file-path";

@Injectable({
  providedIn: 'root'
})
export class ReservoirInfoService {
  private url: string;
  private user: null | IUser;
  private headers: { Authorization: string };
  private reservoir: number | undefined;

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


  async getReservoir(reservoir: number | undefined): Promise<IReservoirInfo> {

    let postUrl: string;
    postUrl = this.url + "tReservoirInfo" + "/" + reservoir;

    const httpOptions = {withCredentials: true, headers: this.headers}

    const result = await this.http.get<CustomResponse>(postUrl, httpOptions).toPromise();

    // console.log(result.data)

    return result.data;
  }

  async getReservoirDetails(reservoir: number | undefined) {
    this.url = this.authService.getApiUrl();
    let resultObj = new ReservoirDetail();

    let postUrl: string;
    postUrl = this.url + "tReservoirDetail" + "/" + reservoir;

    let data: ReservoirDetail;
    const httpOptions = {withCredentials: true, headers: this.headers}

    const result = await this.http.get<CustomResponse>(postUrl, httpOptions).toPromise();

    data = result.data

    data.infonatureimagepath = await this.getImagePath(data.infonatureimage);
    data.infoprojectimagepath = await this.getImagePath(data.infoprojectimage);
    data.infoprojectlayoutimagepath = await this.getImagePath(data.infoprojectlayoutimage);
    data.infosectionimagepath = await this.getImagePath(data.infosectionimage);
    data.infogeoimagepath = await this.getImagePath(data.infogeoimage);

    return data;

  }

  private async getImagePath(infonatureimage: number): Promise<FilePath> {

    if (infonatureimage === undefined || infonatureimage === null) return new FilePath();

    let postUrl: string;
    postUrl = this.url + "tfiles" + "/" + infonatureimage;

    const httpOptions = {withCredentials: true, headers: this.headers}

    const result = await this.http.get<CustomResponse>(postUrl, httpOptions).toPromise();

    if (result.code === 200) {
      const filePath = result.data;
      if (filePath != null) {
        filePath.fileurl = this.url + filePath.path;
        return result.data;
      } else {
        return new FilePath();
      }
    } else {
      return new FilePath();
    }
  }
}
