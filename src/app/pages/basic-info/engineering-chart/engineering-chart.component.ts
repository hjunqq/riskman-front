import { Component, OnInit } from '@angular/core';
import {ReservoirDetail} from "../../../shared/models/reservoir-detail";
import {ReservoirInfoService} from "../../../shared/services/reservoir-info.service";

@Component({
  selector: 'app-engineering-chart',
  templateUrl: './engineering-chart.component.html',
  styleUrls: ['./engineering-chart.component.scss']
})
export class EngineeringChartComponent implements OnInit {
  reservoirDetails: ReservoirDetail;
  charts: any;

  constructor(private reservoirInfoService: ReservoirInfoService) {
    // this.reservoirDetails = new ReservoirDetail();
    // reservoirInfoService.getReservoirDetails().then((e)=>{
    //   this.reservoirDetails = e;
    // })
    this.getCharts().then((e)=>{
      this.charts = e
    });
  }

  ngOnInit() {
  }

  async getCharts() {
    this.reservoirDetails =await this.reservoirInfoService.getReservoirDetails();

    return[
      {
        title:"大坝断面图",
        fileurl: this.reservoirDetails.infosectionimagepath.fileurl,
      },
      {
        title:"工程地质图",
        fileurl: this.reservoirDetails.infogeoimagepath.fileurl,
      }
    ]
  }
}
