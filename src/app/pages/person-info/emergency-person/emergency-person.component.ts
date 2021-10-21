import {Component, OnInit} from '@angular/core';
import {EmergencyManagerService} from "../../../shared/services/emergency-manager.service";

@Component({
  selector: 'app-emergency-person',
  templateUrl: './emergency-person.component.html',
  styleUrls: ['./emergency-person.component.scss']
})
export class EmergencyPersonComponent implements OnInit {
  emergencyPersonData: any;

  constructor(
    private emergencyManagerService: EmergencyManagerService
  ) {
    emergencyManagerService.getEmergencyManager().then((e) => {
      this.emergencyPersonData = e;
    })
  }

  ngOnInit() {
  }

}
