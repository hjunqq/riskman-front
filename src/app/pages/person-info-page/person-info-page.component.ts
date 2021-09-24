import { Component, OnInit } from '@angular/core';
import {TreeViewItem} from "../../shared/models/tree-view.item";

@Component({
  selector: 'app-person-info-page',
  templateUrl: './person-info-page.component.html',
  styleUrls: ['./person-info-page.component.scss']
})
export class PersonInfoPageComponent implements OnInit {
  treeInfo: any;
  IsReservoirManager: boolean;
  IsEmergencyManager: boolean;
  private currentItem: any;
  managerOverview: any;
  managerData:any;
  floodPersonData: any;
  emergencyPersonData: any;

  constructor() {
    this.treeInfo = this.getInfo();

    this.IsReservoirManager = true;

    this.managerOverview = "双城水库管理所筹建于水库建设初期，事业单位编制(企业管理)，隶属县水务局领导，编制12人，其中管理人员编制2名、专业技术人员编制8名、工勤人员2名，股级领导2名（1正1副）"
  }

  ngOnInit() {
  }

  selectItem($event: any) {
    this.currentItem = $event.itemData;
    if (this.currentItem.value === "ReservoirManager") {
      this.setAllFalse();
      this.IsReservoirManager = true;
    } else if (this.currentItem.value === "EmergencyManager") {
      this.setAllFalse();
      this.IsEmergencyManager = true;
    }
  }

  private setAllFalse() {
    this.IsReservoirManager = false;
    this.IsEmergencyManager = false;
  }

  private getInfo() {
    let infos: TreeViewItem[] = [{
      id: "1",
      text: "水库管理人员",
      value: "ReservoirManager",
    },{
      id:"2",
      text:"应急管理人员",
      value: "EmergencyManager",
    }];
    return infos;
  }
}
