import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {CustomResponse} from "../../shared/models/custom-response";
import {EmergencyPlan} from "../../shared/models/emergency-plan";

@Component({
  selector: 'app-emergency-plan-form',
  templateUrl: './emergency-plan-form.component.html',
  styleUrls: ['./emergency-plan-form.component.scss']
})
export class EmergencyPlanFormComponent implements OnInit {
  // @ts-ignore
  @ViewChild('form') form: NgForm;


  isDropZoneActive = false;
  imageSource = "";
  textVisible = true;
  progressVisible = false;
  progressValue = 0;
  customUploadFile = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    let data: CustomResponse = <CustomResponse>await this.http.post("http://localhost:4200/api/files/upload", formData).toPromise();
    this.imageSource = "http://localhost:8080" + data.message;
    console.log(data);
  };
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

  }

  onUploaded(e: any, data:any) {
    data.component.option('formData')[data.dataField] = this.imageSource;
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
  }

  onProgress(e: any) {
    this.progressValue = e.bytesLoaded / e.bytesTotal * 100;
  }


  ngOnInit() {
  }


  private static getEmergencyPlan() {
    let record:EmergencyPlan = {
      ProjectOverview: "",
      Attachment: [],
      ConstructionReinforcement: "",
      DischargeCapcityTable: "",
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
      EconomicOverviewPicture:"http://localhost:8080/api/files/bf569443-85ec-4683-b17c-9c93991988a9.jpg",
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
