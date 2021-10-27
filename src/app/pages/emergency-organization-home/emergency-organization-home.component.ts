import { Component, OnInit } from '@angular/core';
import CustomStore from "devextreme/data/custom_store";

@Component({
  selector: 'app-emergnecy-organization-home',
  templateUrl: './emergency-organization-home.component.html',
  styleUrls: ['./emergency-organization-home.component.scss']
})
export class EmergencyOrganizationHomeComponent implements OnInit {
  monitor: any;
  reporter: any;
  dispatcher: any;
  guarantor: any;

  constructor() {
    this.monitor = new CustomStore({
      load: ()=> this.getMonitor()
    })

    this.reporter = new CustomStore({
      load: ()=> this.getReporter()
    })

    this.dispatcher = new CustomStore({
      load: ()=> this.getDispatcher()
    })

    this.guarantor = new CustomStore({
      load: ()=> this.getGuarantor()
    })
  }

  ngOnInit(): void {
  }

  async getMonitor() {
    return [
      {
        "class": "组  长",
        "name": "王艳辉（县应急局局长）"
      },
      {
        "class": "副组长",
        "name": "宫克发（县气象局局长）"
      },
      {
        "class": "副组长",
        "name": "辛树春（县水利局副局长）"
      },
      {
        "class": "成员",
        "name": "由应急局、气象局、水利局专业技术人员承担"
      },
    ];
  }

  async getReporter() {
    return [
      {
        "class": "组  长",
        "name": "王艳辉（县应急局局长）"
      },
      {
        "class": "副组长",
        "name": "张  泉（县水利局局长）"
      },
      {
        "class": "成员",
        "name": "由应急局、气象局、水利局专业技术人员承担。"
      },
    ];
  }

  async getDispatcher() {
    return [
      {
        "class": "组  长",
        "name": "王永佳（县委副书记、提名县长候选人）"
      },
      {
        "class": "副组长",
        "name": "王艳辉（县应急局局长）"
      },
      {
        "class": "副组长",
        "name": "李天利（县交通运输局局长）"
      },
      {
        "class": "成员",
        "name": "由应急局、交通运输局运输管理人员以及机关单位临时抽调车辆管理组织组成。"
      },
    ];
  }

  async getGuarantor() {
    return [
      {
        "class": "组  长",
        "name": "刘  磊（县人武部副部长）"
      },
      {
        "class": "副组长",
        "name": "牛占军（县自然资源局局长）"
      },
      {
        "class": "副组长",
        "name": "王志元（县卫健委主任）"
      },
      {
        "class": "副组长",
        "name": "沈志宏（县公安局副局长）"
      },
      {
        "class": "副组长",
        "name": "梁振山（县住建局局长）"
      },
      {
        "class": "成员",
        "name": "由县公安局、县卫健委、县住建局、县自然资源局及各水库相关人员组成。"
      }
    ];
  }
}
