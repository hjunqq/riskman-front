import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {CustomResponse} from "../../shared/models/custom-response";
import {EmergencyPlan} from "../../shared/models/emergency-plan";
import {throwError} from "rxjs";
import {FilePath} from "../../shared/models/file-path";

@Component({
  selector: 'app-emergency-plan-form',
  templateUrl: './emergency-plan-form.component.html',
  styleUrls: ['./emergency-plan-form.component.scss']
})
export class EmergencyPlanFormComponent implements OnInit {
  // @ts-ignore
  @ViewChild('form') form: NgForm;

  uploadResponse: CustomResponse;
  isDropZoneActive = false;
  imageSource = "";
  textVisible = true;
  progressVisible = false;
  progressValue = 0;
  value: any[] = [];
  emergencyPlan = new EmergencyPlan();
  buttonOptions: any = {
    text: "提交",
    type: "success",
    useSubmitBehavior: true
  }


  constructor(private http: HttpClient) {
    this.emergencyPlan = EmergencyPlanFormComponent.getEmergencyPlan();
    this.imageSource = "http://localhost:8080/api/files/bf569443-85ec-4683-b17c-9c93991988a9.jpg";
    this.customUploadFile = this.customUploadFile.bind(this);
    this.onUploaded = this.onUploaded.bind(this);
  }

  async customUploadFile(file: any,onProgress:any) {
    const formData = new FormData();
    formData.append("file", file);
    this.uploadResponse = <CustomResponse>await this.http.post("http://localhost:4200/api/files/upload", formData).toPromise();
  };

  onUploaded(e: any, data:any) {
    if(this.uploadResponse.code===200) {
      this.imageSource = "http://localhost:8080" + this.uploadResponse.data.filepath;
      data.component.option('formData')[data.dataField] = <FilePath> this.uploadResponse.data;
      data.component.option('formData')[data.dataField].filename = this.uploadResponse.data.filename;
      data.component.option('formData')[data.dataField].fileurl = this.imageSource;
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
    }else{
      console.log(data);
      e.message=data.message;
    }
  }

  onProgress(e: any) {
    this.progressValue = e.bytesLoaded / e.bytesTotal * 100;
  }


  ngOnInit() {
  }


  private static getEmergencyPlan() {
    let record:EmergencyPlan = {
      DamSafetyIdentityReport: {
        id: 1,
        filename: "FileName",
        storename: "StoreName",
        filepath: "FilePath",
        fileurl: "FileUrl"
      },
      ProjectOverview: "",
      Attachment: [{
        id: 1,
        filename: "FileName",
        storename: "StoreName",
        filepath: "FilePath",
        fileurl: "FileUrl"
      }],
      ConstructionReinforcement: "",
      DischargeCapacityTable: "",
      FloodResponsiblePersons: [],
      GeologyEarthquake: "",
      MainBuildings: "",
      MainBuildingsCharacteristicTable: "",
      MainBuildingsLongitudinalSection: "",
      MainBuildingsPlanLayout: "",
      MainBuildingsTypicalBuildingSection: "",
      MonitoringInstrumentInfoTable: "",
      OccurrenceDisasters: "",
      OperationManagement: "",
      ReservoirCapacityTable: "",
      SchedulingPlan: "",
      WaterInformationInfo: [],
      WaterRainWorkMonitoring: "",
      WorkInformationInfo: [],
      WorkScheme: "",
      NatureOverview: "简单介绍自然概况",
      EconomicOverview: "简单介绍经济概况",
      EconomicOverviewPicture:{
        id: 1,
        filename: "FileName",
        storename: "StoreName",
        filepath: "FilePath",
        fileurl: "FileUrl"
      },
      ProjectLayout:"简述工程布置",
      ProjectLayoutPicture:"http://localhost:8080/api/files/bf569443-85ec-4683-b17c-9c93991988a9.jpg"
    }
    return record;
  }

  async onFormSubmit($event: Event) {
    $event.preventDefault();
    console.log(this.emergencyPlan);
  }
}
