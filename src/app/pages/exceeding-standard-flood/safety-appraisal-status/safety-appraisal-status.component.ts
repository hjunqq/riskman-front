import { Component, OnInit } from '@angular/core';
import CustomStore from "devextreme/data/custom_store";

@Component({
  selector: 'app-safety-appraisal-status',
  templateUrl: './safety-appraisal-status.component.html',
  styleUrls: ['./safety-appraisal-status.component.scss']
})
export class SafetyAppraisalStatusComponent implements OnInit {
  dataSource: any;

  constructor() {
    this.dataSource = new CustomStore({
      load: () => this.getSafetyStatus(),
    });
  }

  ngOnInit(): void {
  }

  async getSafetyStatus() {
    return [    ]
  }
}
