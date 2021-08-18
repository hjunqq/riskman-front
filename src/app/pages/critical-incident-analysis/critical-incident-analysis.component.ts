import { Component, OnInit } from '@angular/core';
import {TreeViewItem} from "../../shared/models/tree-view.item";

@Component({
  selector: 'app-critical-incident-analysis',
  templateUrl: './critical-incident-analysis.component.html',
  styleUrls: ['./critical-incident-analysis.component.scss']
})
export class CriticalIncidentAnalysisComponent implements OnInit {
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
      text: "洪水突发事件",
      expanded: false,
      items: [{
        id: "1_1",
        text: "遭遇10年一遇洪水"
      }, {
        id: "1_2",
        text: "遭遇100年一遇洪水"
      }, {
        id: "1_3",
        text: "遭遇1000年一遇洪水"
      }, {
        id: "1_4",
        text: "遭遇5000年一遇洪水"
      }, {
        id: "1_5",
        text: "漫顶溃坝"
      }]
    }, {
      id: "2",
      text: "突发工程事件",
      expanded: false,
      items: [{
        id: "2_1",
        text: "管涌溃坝"
      }, {
        id: "2_2",
        text: "闸门故障"
      }, {
        id: "2_3",
        text: "渗漏破坏"
      }]
    }, {
      id: "3",
      text: "水污染突发事件",
      expanded: false
    }, {
      id: "4",
      text: "其他突发事件",
      expanded: false
    }, {
      id: "5",
      text: "应急转移方案",
      expanded: false,
      items: [{
        id: "5_1",
        text: "责任人"
      }, {
        id: "5_2",
        text: "信息上报"
      }]
    }];
    return infos;
  }
}
