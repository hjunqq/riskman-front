import { Component, OnInit } from '@angular/core';
import {TreeViewItem} from "../../shared/models/tree-view.item";

@Component({
  selector: 'app-monitoring-and-warning',
  templateUrl: './monitoring-and-warning.component.html',
  styleUrls: ['./monitoring-and-warning.component.scss']
})
export class MonitoringAndWarningComponent implements OnInit {
  infos: any;

  constructor() {
    this.infos = this.getInfos();

  }

  ngOnInit() {
  }

  selectItem($event: any) {

  }

  private getInfos() {
    let infos: TreeViewItem[] = [{
      id: "1",
      text: "监测",
      expanded: false,
      items: [{
        id: "1_1",
        text: "查询"
      },{
        id: "1_2",
        text: "特征值"
      },{
        id: "1_3",
        text: "过程线"
      },{
        id: "1_4",
        text: "线性回归"
      }]
    },{
      id: "2",
      text: "预警",
      expanded: false,
      items: [{
        id: "2_1",
        text: "预警级别"
      }]
    }];
    return infos;
  }
}
