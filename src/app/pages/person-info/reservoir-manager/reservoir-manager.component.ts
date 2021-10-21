import {Component, OnInit} from '@angular/core';
import {ReservoirDetail} from "../../../shared/models/reservoir-detail";
import {PersonInfoService} from "../../../shared/services/person-info.service";
import {FloodPersonService} from "../../../shared/services/flood-person.service";
import {EmergencyManagerService} from "../../../shared/services/emergency-manager.service";
import {ReservoirInfoService} from "../../../shared/services/reservoir-info.service";

@Component({
  selector: 'app-reservoir-manager',
  templateUrl: './reservoir-manager.component.html',
  styleUrls: ['./reservoir-manager.component.scss']
})
export class ReservoirManagerComponent implements OnInit {
  reservoirDetails: ReservoirDetail;
  managerData: any;
  floodPersonData: any;

  constructor(
    private reservoirInfoService: ReservoirInfoService,
    private personInfoService: PersonInfoService,
    private floodPersonService: FloodPersonService,) {

    reservoirInfoService.getReservoirDetails().then((e) => {
      this.reservoirDetails = e;
    })
    personInfoService.getPerson().then((e) => {
      this.managerData = e;
    })
    floodPersonService.getFloodPerson().then((e) => {
      this.floodPersonData = e;
    })

    this.reservoirDetails = new ReservoirDetail();


  }

  ngOnInit() {
  }

}
