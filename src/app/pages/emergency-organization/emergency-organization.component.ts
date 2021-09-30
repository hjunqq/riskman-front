import {Component, OnInit} from '@angular/core';
import {TreeViewItem} from "../../shared/models/tree-view.item";
import {HttpClient} from "@angular/common/http";
import {AuthService, IUser} from "../../shared/services";
import {EmergencyOrgService} from "../../shared/services/emergency-org.service";
import {EmergencyOrganization} from "../../shared/models/emergency-organization";
import {Headquarters} from "../../shared/models/headquarters";
import {Experts} from "../../shared/models/experts";

@Component({
  selector: 'app-emergency-organization',
  templateUrl: './emergency-organization.component.html',
  styleUrls: ['./emergency-organization.component.scss']
})
export class EmergencyOrganizationComponent implements OnInit {
  treeInfo: any;

  emergencyDiagram: any;

  headquartersData: Headquarters[];

  expertsData: Experts[];

  IsHeadquarters: boolean;
  IsEmergencyDiagram: boolean;
  IsExpertsGroup: boolean;
  IsEmergencyRescue: boolean;
  IsEmergencyGrade: boolean;
  IsEmergencyProcess: boolean;
  private currentItem: any;
  IsFloodWaterDepth: boolean;
  IsArrivedTime: boolean;
  IsExitRoadMap: boolean;
  floodInfo: any;
  arrivedTimeData: any;
  exitRoadData: any;
  subtitle: any;
  figurePath: any;
  emergencyGrade: any;
  emergencyProcess: any;
  floodWaterDepthBtnType: any;
  arrivedTimeBtnType: any;
  exitRoadBtnType: any;
  private user: null | IUser;
  private headers: { Authorization: string };
  private reservoir: number | undefined;

  emergencyOrg: EmergencyOrganization;
  villages: any;

  constructor(private http: HttpClient, private authService: AuthService,
              private emergencyOrgService:EmergencyOrgService) {

    this.authService.getUser().then((e) => {
      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + this.user?.token
      };
      this.reservoir = this.user?.reservoir;

      emergencyOrgService.getEmergencyOrg(this.reservoir).then((e)=>{
        this.emergencyOrg = e;
      })

      emergencyOrgService.getHeadquarters(this.reservoir).then((e)=>{
        this.headquartersData = e;
      })

      emergencyOrgService.getExperts(this.reservoir).then((e)=>{
        this.expertsData = e;
      })

      emergencyOrgService.getFloodInfo(this.reservoir).then((e)=>{
        this.floodInfo = e;
      })

      emergencyOrgService.getVillage(this.reservoir).then((e) => {
        this.villages = e;
      })

      emergencyOrgService.getExitRoad(this.reservoir).then((e)=>{
        this.exitRoadData = e;
      })

    });

    this.setAllFalse();

    this.treeInfo = EmergencyOrganizationComponent.getInfo();

    this.emergencyOrg = new EmergencyOrganization();

    this.IsEmergencyDiagram = true;
    this.IsFloodWaterDepth = true;
    this.subtitle = "";
    // this.floodWaterDepthBtnType = "default";
    // this.arrivedTimeBtnType = "success";
    // this.exitRoadBtnType = "danger";
  }

  ngOnInit() {


  }

  selectItem($event: any) {
    this.currentItem = $event.itemData;
    if (this.currentItem.value === "Headquarters") {
      this.setAllFalse();
      this.IsHeadquarters = true;
    } else if (this.currentItem.value === "EmergencyDiagram") {
      this.setAllFalse();
      this.IsEmergencyDiagram = true;
    } else if (this.currentItem.value === "ExpertsGroup") {
      this.setAllFalse();
      this.IsExpertsGroup = true;
    } else if (this.currentItem.value === "EmergencyRescue") {
      this.setAllFalse();
      this.IsEmergencyRescue = true;
    } else if (this.currentItem.value === "EmergencyGrade") {
      this.setAllFalse();
      this.IsEmergencyGrade = true;
    } else if (this.currentItem.value === "EmergencyProcess") {
      this.setAllFalse();
      this.IsEmergencyProcess = true;
    }
  }

  private setAllFalse() {
    this.IsHeadquarters = false;
    this.IsEmergencyDiagram = false;
    this.IsExpertsGroup = false;
    this.IsEmergencyRescue = false;
    this.IsEmergencyGrade = false;
    this.IsEmergencyProcess = false;
  }

  private static getInfo() {
    let infos: TreeViewItem[] = [{
      id: "1",
      text: "应急组织框图",
      value: "EmergencyDiagram",
    }, {
      id: "2",
      text: "指挥部",
      value: "Headquarters",
    }, {
      id: "3",
      text: "专家组",
      value: "ExpertsGroup",
    }, {
      id: "4",
      text: "抢险与救援",
      value: "EmergencyRescue",
    }, {
      id: "5",
      text: "应急响应分级表",
      value: "EmergencyGrade",
    }, {
      id: "6",
      text: "应急流程",
      value: "EmergencyProcess",
    },];
    return infos;
  }

  btnClick(btnIdx: number) {
    // 1-淹没水深
    // 2-到达时间
    // 3-撤离路线
    if (0 == btnIdx) {
      this.floodWaterDepthBtnType = "default";
      this.arrivedTimeBtnType = "normal";
      this.exitRoadBtnType = "normal";
      this.IsFloodWaterDepth = true;
      this.IsArrivedTime = false;
      this.IsExitRoadMap = false;
      this.figurePath = this.emergencyOrg.floodwaterdepthimagepath.fileurl;
    } else if (1 == btnIdx) {
      this.floodWaterDepthBtnType = "normal";
      this.arrivedTimeBtnType = "default";
      this.exitRoadBtnType = "normal";
      this.IsFloodWaterDepth = false;
      this.IsArrivedTime = true;
      this.IsExitRoadMap = false;
      this.figurePath = this.emergencyOrg.arrivedtimeimagepath.fileurl;
    } else if (2 == btnIdx) {
      this.floodWaterDepthBtnType = "normal";
      this.arrivedTimeBtnType = "normal";
      this.exitRoadBtnType = "default";
      this.IsFloodWaterDepth = false;
      this.IsArrivedTime = false;
      this.IsExitRoadMap = true;
      this.figurePath = this.emergencyOrg.evacuationimagepath.fileurl;
    }

  }
}
