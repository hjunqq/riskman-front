import { Component, OnInit } from '@angular/core';
import {ReservoirInfoService} from "../../../shared/services/reservoir-info.service";
import {ReservoirDetail} from "../../../shared/models/reservoir-detail";

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {
  reservoirDetails: ReservoirDetail;

  constructor(private reservoirInfoService: ReservoirInfoService) {

    reservoirInfoService.getReservoirDetails().then((e)=>{
      this.reservoirDetails = e;
    })

    this.reservoirDetails = new ReservoirDetail();
  }

  ngOnInit() {
  }

}
