import { Component, OnInit } from '@angular/core';
import {EmergencyOrgService} from "../../../shared/services/emergency-org.service";
import {EmergencyOrganization} from "../../../shared/models/emergency-organization";

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {
  emergencyOrg: EmergencyOrganization;

  constructor(private emergencyOrgService:EmergencyOrgService) {
    emergencyOrgService.getEmergencyOrg().then((e)=>{
      this.emergencyOrg = e;
    })
  }

  ngOnInit() {
  }

}
