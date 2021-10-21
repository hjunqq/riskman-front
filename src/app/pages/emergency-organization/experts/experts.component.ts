import { Component, OnInit } from '@angular/core';
import {Experts} from "../../../shared/models/experts";
import {EmergencyOrgService} from "../../../shared/services/emergency-org.service";

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.scss']
})
export class ExpertsComponent implements OnInit {
  expertsData: Experts[];

  constructor(private emergencyOrgService:EmergencyOrgService) {
    emergencyOrgService.getExperts().then((e)=>{
      this.expertsData = e;
    })
  }

  ngOnInit() {
  }

}
