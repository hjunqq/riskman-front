import {Component, OnInit} from '@angular/core';
import {TreeViewItem} from "../../shared/models/tree-view.item";

@Component({
  selector: 'app-emergency-organization',
  templateUrl: './emergency-organization.component.html',
  styleUrls: ['./emergency-organization.component.scss']
})
export class EmergencyOrganizationComponent implements OnInit {
  treeInfo: any;

  emergencyDiagram: any;

  headquartersData: any;

  expertsGroupData: any;

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
  floodWaterDepthData: any;
  arrivedTimeData: any;
  exitRoadData: any;
  subtitle: any;
  figurePath: any;
  emergencyGrade: any;
  emergencyProcess: any;
  floodWaterDepthBtnType: any;
  arrivedTimeBtnType: any;
  exitRoadBtnType: any;

  constructor() {
    this.setAllFalse();

    this.treeInfo = EmergencyOrganizationComponent.getInfo();

    this.IsEmergencyDiagram = true;
    this.IsFloodWaterDepth = true;
    this.subtitle = "双城水库遭遇漫顶溃决洪水量最大淹没水深图";
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
    } else if (1 == btnIdx) {
      this.floodWaterDepthBtnType = "normal";
      this.arrivedTimeBtnType = "default";
      this.exitRoadBtnType = "normal";
    } else if (2 == btnIdx) {
      this.floodWaterDepthBtnType = "normal";
      this.arrivedTimeBtnType = "normal";
      this.exitRoadBtnType = "default";
    }

  }
}
