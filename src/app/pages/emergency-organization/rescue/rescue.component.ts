import { Component, OnInit } from '@angular/core';
import {EmergencyOrganization} from "../../../shared/models/emergency-organization";
import {EmergencyOrgService} from "../../../shared/services/emergency-org.service";

@Component({
  selector: 'app-rescue',
  templateUrl: './rescue.component.html',
  styleUrls: ['./rescue.component.scss']
})
export class RescueComponent implements OnInit {
  floodWaterDepthBtnType: any;
  arrivedTimeBtnType: any;
  exitRoadBtnType: any;
  IsFloodWaterDepth: any;
  floodInfo: any;
  villages: any;
  IsArrivedTime: any;
  IsExitRoadMap: any;
  exitRoadData: any;
  subtitle: any;
  figurePath: any;

  emergencyOrg: EmergencyOrganization;

  constructor(private emergencyOrgService:EmergencyOrgService) {

    this.getEmergencyOrganization();

    emergencyOrgService.getFloodInfo().then((e)=>{
      this.floodInfo = e;
      this.btnClick(0);
    })

    emergencyOrgService.getVillage().then((e) => {
      this.villages = e;
    })

    emergencyOrgService.getExitRoad().then((e)=>{
      this.exitRoadData = e;
    })
  }

  ngOnInit() {
  }

  async getEmergencyOrganization() {
    this.emergencyOrg =await this.emergencyOrgService.getEmergencyOrg();
  }

  async btnClick(btnIdx: number) {
    // 1-淹没水深
    // 2-到达时间
    // 3-撤离路线

    if (this.emergencyOrg === undefined) {
      await this.getEmergencyOrganization();
    }

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
