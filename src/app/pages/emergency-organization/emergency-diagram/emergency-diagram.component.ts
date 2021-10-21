import { Component, OnInit } from '@angular/core';
import {EmergencyOrganization} from "../../../shared/models/emergency-organization";
import {EmergencyOrgService} from "../../../shared/services/emergency-org.service";

@Component({
  selector: 'app-emergency-diagram',
  templateUrl: './emergency-diagram.component.html',
  styleUrls: ['./emergency-diagram.component.scss']
})
export class EmergencyDiagramComponent implements OnInit {
  emergencyOrg: EmergencyOrganization;

  constructor(
    private emergencyOrgService:EmergencyOrgService
  ) {
    emergencyOrgService.getEmergencyOrg().then((e)=>{
      this.emergencyOrg = e;
    })
  }

  ngOnInit() {
  }

}
