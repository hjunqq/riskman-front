import {Component, OnInit} from '@angular/core';
import {TreeViewItem} from "../../shared/models/tree-view.item";

@Component({
  selector: 'app-emergency-management-page',
  templateUrl: './emergency-management-page.component.html',
  styleUrls: ['./emergency-management-page.component.scss']
})
export class EmergencyManagementPageComponent implements OnInit {
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
      id: "0",
      text: "应急组织体系图"
    }, {
      id: "1",
      text: "应急相关单位",
      expanded: false,
      items: [{
        id: "1_1",
        text: "办公室"
      }, {
        id: "1_2",
        text: "指挥机构"
      }, {
        id: "1_3",
        text: "保障机构"
      }, {
        id: "1_4",
        text: "专家组"
      }, {
        id: "1_5",
        text: "抢险与救援"
      }]
    }, {
      id: "2",
      text: "应急响应",
      expanded: false,
      items: [{
        id: "2_1",
        text: "响应流程"
      }, {
        id: "2_2",
        text: "分级上报"
      }, {
        id: "2_3",
        text: "信息记录"
      }]
    }, {
      id: "3",
      text: "应急保障",
      expanded: false,
      items: [{
        id: "3_1",
        text: "物资"
      }]
    }];
    return infos;
  }
}
