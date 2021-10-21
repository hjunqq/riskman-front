import {Injectable} from '@angular/core';
import {AuthService, IUser} from "./auth.service";
import {ReservoirInfo} from "../models/reservoir-info";
import {HttpClient} from "@angular/common/http";
import {CustomResponse} from "../models/custom-response";
import {FilePath} from "../models/file-path";
import {EmergencyOrganization} from "../models/emergency-organization";
import {Headquarters} from "../models/headquarters";
import {Experts} from "../models/experts";
import {FloodInfo} from "../models/flood-info";
import {DownstreamVillage} from "../models/downstream-village";
import {EvacuationInfo} from "../models/evacuation-info";

@Injectable({
  providedIn: 'root'
})
export class EmergencyOrgService {
  private url: string;
  private user: null | IUser;
  private headers: { Authorization: string };
  private reservoir: number | undefined;
  private allReservoir: ReservoirInfo[];

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

  async getEmergencyOrg() : Promise<EmergencyOrganization>{
    this.user = (await this.authService.getUser())?.data;
    this.headers = {
      Authorization: 'Bearer ' + this.user?.token
    };

    this.url = this.authService.getApiUrl();

    let reservoir = this.user?.reservoir;

    this.url = this.authService.getApiUrl();

    let resultObj = new EmergencyOrganization();

    let postUrl: string;
    postUrl = this.url + "tEmergencyOrg" + "/list"

    const httpParams = {"reservoirid": reservoir};

    let data: EmergencyOrganization;
    const httpOptions = {withCredentials: true, headers: this.headers, body:httpParams}

    const result = await this.http.post<CustomResponse>(postUrl,httpParams, httpOptions).toPromise();

    data = result.data[0]

    data.emergencyorgimagepath = await this.getImagePath(data.emergencyorgimage);
    data.floodwaterdepthimagepath = await this.getImagePath(data.floodwaterdepthimage);
    data.arrivedtimeimagepath = await this.getImagePath(data.arrivedtimeimage);
    data.evacuationimagepath = await this.getImagePath(data.evacuationimage);
    data.emergencyprocessimagepath = await this.getImagePath(data.emergencyprocessimage);

    return data;

  }


  async getHeadquarters():Promise<Headquarters[]>{
    this.user = (await this.authService.getUser())?.data;
    this.headers = {
      Authorization: 'Bearer ' + this.user?.token
    };

    this.url = this.authService.getApiUrl();

    let reservoir = this.user?.reservoir;
    this.url = this.authService.getApiUrl();

    let postUrl: string;
    postUrl = this.url + "tHeadquarters" + "/list"

    const httpParams = {"reservoirid": reservoir};

    let data: Headquarters[];

    const httpOptions = {withCredentials: true, headers: this.headers, body:httpParams}

    const result = await this.http.post<CustomResponse>(postUrl,httpParams, httpOptions).toPromise();

    data = result.data

    return data;

  }

  async getExperts():Promise<Experts[]>{
    this.user = (await this.authService.getUser())?.data;
    this.headers = {
      Authorization: 'Bearer ' + this.user?.token
    };

    this.url = this.authService.getApiUrl();

    let reservoir = this.user?.reservoir;

    this.url = this.authService.getApiUrl();

    let postUrl: string;
    postUrl = this.url + "tExperts" + "/list";

    const httpParams = {"reservoirid": reservoir};

    let data: Experts[];

    const httpOptions = {withCredentials: true, headers: this.headers}

    const result = await this.http.post<CustomResponse>(postUrl,httpParams, httpOptions).toPromise();

    data = result.data

    return data;

  }

  async getFloodInfo():Promise<FloodInfo[]>{
    this.user = (await this.authService.getUser())?.data;
    this.headers = {
      Authorization: 'Bearer ' + this.user?.token
    };

    this.url = this.authService.getApiUrl();

    let reservoir = this.user?.reservoir;
    this.url = this.authService.getApiUrl();

    let postUrl: string;
    postUrl = this.url + "tFloodInfo" + "/list"

    const httpParams = {"reservoirid": reservoir};

    let data: FloodInfo[];
    const httpOptions = {withCredentials: true, headers: this.headers}

    const result = await this.http.post<CustomResponse>(postUrl,httpParams, httpOptions).toPromise();

    data = result.data

    return data;

  }

  async getExitRoad():Promise<EvacuationInfo[]>{
    this.user = (await this.authService.getUser())?.data;
    this.headers = {
      Authorization: 'Bearer ' + this.user?.token
    };

    this.url = this.authService.getApiUrl();

    let reservoir = this.user?.reservoir;
    this.url = this.authService.getApiUrl();

    let postUrl: string;
    postUrl = this.url + "tEvacuationInfo" + "/list"

    const httpParams = {"reservoirid": reservoir};

    let data: FloodInfo[];
    const httpOptions = {withCredentials: true, headers: this.headers}

    const result = await this.http.post<CustomResponse>(postUrl,httpParams, httpOptions).toPromise();

    data = result.data

    return data;

  }

  async getVillage():Promise<DownstreamVillage[]>{
    this.user = (await this.authService.getUser())?.data;
    this.headers = {
      Authorization: 'Bearer ' + this.user?.token
    };

    this.url = this.authService.getApiUrl();

    let reservoir = this.user?.reservoir;
    this.url = this.authService.getApiUrl();

    let postUrl: string;
    postUrl = this.url + "tDownstreamVillage" + "/list"

    const httpParams = {"reservoirid": reservoir};

    let data: DownstreamVillage[];
    const httpOptions = {withCredentials: true, headers: this.headers}

    const result = await this.http.post<CustomResponse>(postUrl,httpParams, httpOptions).toPromise();

    data = result.data

        return data;
    }

    async sendFloodInfoRequest(url: string, method: string="GET", data: any= {}): Promise<any> {
      let postUrl: string;
    postUrl = this.url + "tFloodInfo";
    const record = data.values;

    const httpParams = record;
    const httpOptions = {withCredentials: true, headers: this.headers, body: httpParams};

    let result:CustomResponse = new CustomResponse();

    switch (method) {
      case 'PUT':
        record.reservoirid = this.reservoir;
        result = await this.http.put<CustomResponse>(postUrl, httpParams, httpOptions).toPromise();
        break;
      case 'POST':
        record.reservoirid = this.reservoir;
        result = await this.http.post<CustomResponse>(postUrl, httpParams, httpOptions).toPromise();
        break;
      case 'DELETE':
        postUrl += '/' + data.key;
        result = await this.http.delete<CustomResponse>(postUrl, httpOptions).toPromise();
        break;
    }

    return result.data;
  }

  async sendHeadquartersRequest(url: string, method: string="GET", data: any= {}): Promise<any> {
    let postUrl: string;
    postUrl = this.url + "tHeadquarters";
    const record = data.values;

    const httpParams = record;
    const httpOptions = {withCredentials: true, headers: this.headers, body: httpParams};

    let result:CustomResponse = new CustomResponse();

    switch (method) {
      case 'PUT':
        record.reservoirid = this.reservoir;
        result = await this.http.put<CustomResponse>(postUrl, httpParams, httpOptions).toPromise();
        break;
      case 'POST':
        record.reservoirid = this.reservoir;
        result = await this.http.post<CustomResponse>(postUrl, httpParams, httpOptions).toPromise();
        break;
      case 'DELETE':
        postUrl += '/' + data.key;
        result = await this.http.delete<CustomResponse>(postUrl, httpOptions).toPromise();
        break;
    }

    return result.data;
  }

  async sendExpertsRequest(url: string, method: string="GET", data: any= {}): Promise<any> {
    let postUrl: string;
    postUrl = this.url + "tExperts";
    const record = data.values;

    const httpParams = record;
    const httpOptions = {withCredentials: true, headers: this.headers, body: httpParams};

    let result:CustomResponse = new CustomResponse();

    switch (method) {
      case 'PUT':
        record.reservoirid = this.reservoir;
        result = await this.http.put<CustomResponse>(postUrl, httpParams, httpOptions).toPromise();
        break;
      case 'POST':
        record.reservoirid = this.reservoir;
        result = await this.http.post<CustomResponse>(postUrl, httpParams, httpOptions).toPromise();
        break;
      case 'DELETE':
        postUrl += '/' + data.key;
        result = await this.http.delete<CustomResponse>(postUrl, httpOptions).toPromise();
        break;
    }

    return result.data;
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
