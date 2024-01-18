import { Component, OnInit } from '@angular/core';
import {EmergencyOrgService} from "../../../shared/services/emergency-org.service";

@Component({
  selector: 'app-headquarters',
  templateUrl: './headquarters.component.html',
  styleUrls: ['./headquarters.component.scss']
})
export class HeadquartersComponent implements OnInit {
  headquartersData: any;
  expertsData: any;

  constructor(private emergencyOrgService:EmergencyOrgService) {
    emergencyOrgService.getHeadquarters().then((e)=>{
      this.headquartersData = e;
    })
    emergencyOrgService.getExperts().then((e)=>{
      this.expertsData = e;
    })
  }

  ngOnInit() {
  }

}
