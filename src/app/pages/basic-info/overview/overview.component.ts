import { Component, OnInit } from '@angular/core';
import {ReservoirInfoService} from "../../../shared/services/reservoir-info.service";
import {AuthService, IUser} from "../../../shared/services";
import {ReservoirDetail} from "../../../shared/models/reservoir-detail";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  reservoirDetails: ReservoirDetail;
  private user: null | IUser;
  private reservoir: number | undefined;

  constructor(private reservoirInfoService: ReservoirInfoService) {

    this.reservoirDetails = new ReservoirDetail();

    reservoirInfoService.getReservoirDetails().then((e)=>{
      this.reservoirDetails = e;
    })
  }

  ngOnInit() {
  }

}
