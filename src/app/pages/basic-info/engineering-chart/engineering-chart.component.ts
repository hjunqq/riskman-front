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

  constructor(private reservoirInfoService: ReservoirInfoService) {
    this.reservoirDetails = new ReservoirDetail();
    reservoirInfoService.getReservoirDetails().then((e)=>{
      this.reservoirDetails = e;
    })
  }

  ngOnInit() {
  }

}
