import {Component, OnInit} from '@angular/core';
import {TreeViewItem} from "../../shared/models/tree-view.item";


@Component({
  selector: 'app-basic-info-page',
  templateUrl: './basic-info-page.component.html',
  styleUrls: ['./basic-info-page.component.scss']
})
export class BasicInfoPageComponent implements OnInit {
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
      text: "工程概况",
      expanded: false,
      items: [{
        id: "1_1",
        text: "工程平面图"
      },{
        id: "1_2",
        text: "主要建筑物"
      },{
        id: "1_3",
        text: "工程特性表"
      },{
        id: "1_4",
        text: "防洪设计标准（图表）"
      }]
    },{
      id: "2",
      text: "监测与预警",
      expanded: false,
      items: [{
        id: "2_1",
        text: "监测仪器布置图"
      },{
        id: "2_2",
        text: "监测仪期信息表"
      },{
        id: "2_3",
        text: "预警值设置"
      }]
    },{
      id: "3",
      text: "运行与管理",
      expanded: false,
      items: [{
        id: "3_1",
        text: "水库管理机构组织体系"
      },{
        id: "3_2",
        text: "联系方式"
      },{
        id: "3_3",
        text: "友情链接"
      }]
    },{
        id: "4",
        text: "相关文件",
        expanded: false,
        items: [{
          id: "4_1",
          text: "设计文件"
        },{
          id: "4_2",
          text: "制度文件"
        },{
          id: "4_3",
          text: "安全鉴定文件"
        }]
    }];
    return infos;
  }

}
