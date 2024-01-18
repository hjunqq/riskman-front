import {Component, OnInit} from '@angular/core';
import {EmergencyOrgService} from "../../../shared/services/emergency-org.service";
import {EmergencyOrganization} from "../../../shared/models/emergency-organization";
import CustomStore from "devextreme/data/custom_store";
import {FloodInfo} from "../../../shared/models/flood-info";

@Component({
  selector: 'app-overtop-dam-break',
  templateUrl: './overtop-dam-break.component.html',
  styleUrls: ['./overtop-dam-break.component.scss']
})
export class OvertopDamBreakComponent implements OnInit {
  floodInfo: any;
  villages: any;
  charts: any;
  emergencyOrg: EmergencyOrganization;

  constructor(private emergencyOrgService: EmergencyOrgService) {
    this.getCharts().then((e) => {
      this.charts = e;
    });
    this.floodInfo = new CustomStore({
      load: () => this.getFloodInfo(),
    });
    this.villages = new CustomStore({
      load: ()=>this.getVillages(),
    });

  }

  ngOnInit(): void {
  }

  async getCharts() {
    this.emergencyOrg = await this.emergencyOrgService.getEmergencyOrg();

    return [
      {
        title: "淹没水深图",
        fileurl: this.emergencyOrg.floodwaterdepthimagepath.fileurl,
      },
      {
        title: "到达时间图",
        fileurl: this.emergencyOrg.arrivedtimeimagepath.fileurl,
      },
      {
        title:"临时安置点",
        fileurl: this.emergencyOrg.evacuationimagepath.fileurl,
      }
    ]
  }

  async getFloodInfo() {
    this.floodInfo = await this.emergencyOrgService.getFloodInfo();
  }

  async getVillages() {
    this.villages = await this.emergencyOrgService.getVillage();
  }
}
