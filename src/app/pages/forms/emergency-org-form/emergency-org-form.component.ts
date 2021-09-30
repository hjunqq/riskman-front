import {Component, OnInit} from '@angular/core';
import {AuthService, IUser} from "../../../shared/services";
import {ReservoirInfo} from "../../../shared/models/reservoir-info";
import {HttpClient} from "@angular/common/http";
import {ReservoirInfoService} from "../../../shared/services/reservoir-info.service";
import {CustomResponse} from "../../../shared/models/custom-response";
import {FilePath} from "../../../shared/models/file-path";
import {EmergencyOrganization} from "../../../shared/models/emergency-organization";
import notify from "devextreme/ui/notify";
import {EmergencyOrgService} from "../../../shared/services/emergency-org.service";
import CustomStore from "devextreme/data/custom_store";
import {DownstreamVillage} from "../../../shared/models/downstream-village";

@Component({
  selector: 'app-emergency-org-form',
  templateUrl: './emergency-org-form.component.html',
  styleUrls: ['./emergency-org-form.component.scss']
})
export class EmergencyOrgFormComponent implements OnInit {
  dataSource: any;
  private url: string;
  headers: any;
  user: IUser | null;
  reservoir: number | undefined;
  currentReservoir: ReservoirInfo;


  uploadResponse: CustomResponse;
  private imageSource: string;
  isDropZoneActive = false;
  progressVisible = false;
  progressValue = 0;
  textVisible = true;
  buttonOptions: any = {
    text: "提交",
    type: "success",
    useSubmitBehavior: true
  }
  emergencyOrg: EmergencyOrganization;
  floodInfo: any;
  villages: DownstreamVillage[];
  headquarters: any;
  experts: any;

  constructor(private http: HttpClient, private authService: AuthService,
              private reservoirInfoService: ReservoirInfoService,
              private emergencyOrgService: EmergencyOrgService,
              ) {
    this.authService.getUser().then((e) => {
      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + this.user?.token
      };
      this.reservoir = this.user?.reservoir;

      reservoirInfoService.getReservoir(this.reservoir).then((e) => {
        this.currentReservoir = e;
      });

      emergencyOrgService.getEmergencyOrg(this.reservoir).then((e) => {
        this.emergencyOrg = e;
      })

      emergencyOrgService.getVillage(this.reservoir).then((e) => {
        this.villages = e;
      })

    });

    this.emergencyOrg = new EmergencyOrganization();

    this.url = this.authService.getApiUrl();

    this.floodInfo = new CustomStore({
      key: 'id',
      load: () => emergencyOrgService.getFloodInfo(this.reservoir),
      insert: values => emergencyOrgService.sendFloodInfoRequest("/","POST",{values}),
      update: (key,values) => emergencyOrgService.sendFloodInfoRequest("/","PUT", {key,values}),
      remove: key => emergencyOrgService.sendFloodInfoRequest("/","DELETE",{key}),
    });

    this.headquarters = new CustomStore({
      key: 'id',
      load: () => emergencyOrgService.getHeadquarters(this.reservoir),
      insert: values => emergencyOrgService.sendHeadquartersRequest("/","POST",{values}),
      update: (key,values) => emergencyOrgService.sendHeadquartersRequest("/","PUT", {key,values}),
      remove: key => emergencyOrgService.sendHeadquartersRequest("/","DELETE",{key}),
    });

    this.experts = new CustomStore({
      key: 'id',
      load: () => emergencyOrgService.getExperts(this.reservoir),
      insert: values => emergencyOrgService.sendExpertsRequest("/","POST",{values}),
      update: (key,values) => emergencyOrgService.sendExpertsRequest("/","PUT", {key,values}),
      remove: key => emergencyOrgService.sendExpertsRequest("/","DELETE",{key}),
    });

    // this.customUploadFile = this.customUploadFile.bind(this);
    // this.onUploaded = this.onUploaded.bind(this);

  }

  ngOnInit() {
  }

  async onFormSubmit($event: Event) {
    $event.preventDefault();
    console.log(this.emergencyOrg);

    let postUrl: string;
    postUrl = this.url + "tEmergencyOrg";
    const record = this.emergencyOrg;

    if (this.reservoir != null) {
      record.reservoirid = this.reservoir;
    }


    if (record.emergencyorgimagepath !== null) {
      record.emergencyorgimage = record.emergencyorgimagepath.id;
    }
    if (record.floodwaterdepthimagepath !== null) {
      record.floodwaterdepthimage = record.floodwaterdepthimagepath.id;
    }
    if (record.arrivedtimeimagepath !== null) {
      record.arrivedtimeimage = record.arrivedtimeimagepath.id;
    }
    if (record.evacuationimagepath !== null) {
      record.evacuationimage = record.evacuationimagepath.id;
    }
    if (record.emergencyprocessimagepath !== null) {
      record.emergencyprocessimage = record.emergencyprocessimagepath.id;
    }

    const httpParams = record;
    const httpOptions = {withCredentials: true, headers: this.headers, body: httpParams};


    let result;
    if (record.id === null || record.id === undefined) {
      result = await this.http.post<CustomResponse>(postUrl, httpParams, httpOptions).toPromise();
    } else {
      result = await this.http.put<CustomResponse>(postUrl, httpParams, httpOptions).toPromise();
    }

    if (result.code == 200) {
      console.log("success");

      notify({
        message: "提交成功",
        position: {
          my: "center top",
          at: "center top"
        }
      }, "success", 3000);
    }


  }

  onUploaded(e: any, data: any) {
    const response: CustomResponse = JSON.parse(e.request.responseText);
    if (response.code === 200) {
      this.imageSource = this.url + response.data.path;
      data.component.option('formData')[data.dataField] = <FilePath>response.data;
      data.component.option('formData')[data.dataField].filename = response.data.filename;
      data.component.option('formData')[data.dataField].fileurl = this.imageSource;
      data.component.option('formData')[data.dataField].path = this.imageSource;
      const file = e.file;
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.isDropZoneActive = false;
        this.imageSource = fileReader.result as string;
      }
      fileReader.readAsDataURL(file);
      this.textVisible = false;
      this.progressVisible = false;
      this.progressValue = 0;
    } else {
      e.message = data.message;
    }
  }

  onProgress(e: any) {
    this.progressValue = e.bytesLoaded / e.bytesTotal * 100;
  }
}
