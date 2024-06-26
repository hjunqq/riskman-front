import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService, IUser} from "../../../shared/services";
import {ReservoirInfo} from "../../../shared/models/reservoir-info";
import {CustomResponse} from "../../../shared/models/custom-response";
import {FilePath} from "../../../shared/models/file-path";
import {ReservoirDetail} from "../../../shared/models/reservoir-detail";
import notify from "devextreme/ui/notify";
import {ReservoirInfoService} from "../../../shared/services/reservoir-info.service";

@Component({
  selector: 'app-reservoir-detail-form',
  templateUrl: './reservoir-detail-form.component.html',
  styleUrls: ['./reservoir-detail-form.component.scss']
})
export class ReservoirDetailFormComponent implements OnInit {
  dataSource: any;
  private url: string;
  headers: any;
  user: IUser | null;
  reservoir: number | undefined;
  currentReservoir: ReservoirInfo;
  reservoirDetails: ReservoirDetail;

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


  constructor(private http: HttpClient, private authService: AuthService, private reservoirInfoService: ReservoirInfoService) {
    this.authService.getUser().then((e) => {
      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + this.user?.token
      };
      this.reservoir = this.user?.reservoir;

      reservoirInfoService.getReservoir(this.reservoir).then((e) => {
        this.currentReservoir = e;
      });

      reservoirInfoService.getReservoirDetails().then((e) => {
        this.reservoirDetails = e;
      })

    });

    this.reservoirDetails = new ReservoirDetail();


    this.url = this.authService.getApiUrl();

    // this.customUploadFile = this.customUploadFile.bind(this);
    // this.onUploaded = this.onUploaded.bind(this);

  }

  async customUploadFile(file: any) {
    const formData = new FormData();
    formData.append("file", file);
    this.uploadResponse = <CustomResponse>await this.http.post("http://localhost:4200/api/files/upload", formData).toPromise();
    console.log(this.uploadResponse);
  };

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

  ngOnInit() {
  }

  async getRecords() {
    let postUrl: string;
    postUrl = this.url + "tReservoirDetail";

    let data: ReservoirDetail | undefined = undefined;
    const httpOptions = {withCredentials: true, headers: this.headers}

    const result = await this.http.get<CustomResponse>(postUrl, httpOptions).toPromise();
    if (result) {
      data = result.data;
    }

    return data;
  }

  async onFormSubmit($event: Event) {
    $event.preventDefault();
    console.log(this.reservoirDetails);

    let postUrl: string;
    postUrl = this.url + "tReservoirDetail";
    const record = this.reservoirDetails;

    if (this.reservoir != null) {
      record.reservoirid = this.reservoir;
    }



    if (record.infonatureimagepath !== null) {
      record.infonatureimage = record.infonatureimagepath.id;
    }
    if (record.infoprojectimagepath !== null) {
      record.infoprojectimage = record.infoprojectimagepath.id;
    }
    if (record.infoprojectlayoutimagepath !== null) {
      record.infoprojectlayoutimage = record.infoprojectlayoutimagepath.id;
    }
    if (record.infosectionimagepath !== null) {
      record.infosectionimage = record.infosectionimagepath.id;
    }
    if(record.infogeoimagepath !== null){
      record.infogeoimage = record.infogeoimagepath.id;
    }

    const httpParams = record;
    const httpOptions = {withCredentials: true, headers: this.headers, body: httpParams};


    let result;
    if (record.id === null || record.id === undefined) {
      result = await this.http.post<CustomResponse>(postUrl, httpParams, httpOptions).toPromise();
    } else {
      result = await this.http.put<CustomResponse>(postUrl, httpParams, httpOptions).toPromise();
    }

    if (result && result.code == 200) {
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
}
