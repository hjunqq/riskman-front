import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-report',
  templateUrl: './info-report.component.html',
  styleUrls: ['./info-report.component.scss']
})
export class InfoReportComponent implements OnInit {
  buttonOptions: any = {
    text: "提交",
    type: "success",
    useSubmitBehavior: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
