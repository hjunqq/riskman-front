import { Component, OnInit } from '@angular/core';
import CustomStore from "devextreme/data/custom_store";

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {
  emergencyGrade: any;
  grades: any;

  constructor() {
    this.grades = new CustomStore({
      load: ()=> this.getGrades()
    })
  }

  ngOnInit() {
  }

  async getGrades() {
    return [
      {
        "level": "Ⅱ级\n严重\n橙色",
        "event": "洪水/工程事故",
        "description": "根据洪水预报，可能遭遇50年一遇洪水，库水位已到设计洪水位461.76m，且3h雨量已达50mm；入库流量迅速增大；中短期天气预报近期仍有较强降雨。/ " +
          "坝体多处产生渗漏，渗漏量持续增大；\n" +
          "输水洞接触渗漏部位出现漏洞；\n" +
          "溢洪道闸门无法开启；\n" +
          "溢洪道闸门均无法开启，并遭遇50年以上一遇洪水。\n",
        "measures": "应急指挥长会商确定应对措施， 报告上级政府和部门；带领专家组赶赴现场，召集抢险队伍，调集抢险物资和装备；根据情况决定人员转移，有序组织实施；加强事件变化和水雨情跟踪观测。"
      },
      {
        "level": "Ⅰ级\n特别严重\n红色",
        "event": "洪水/工程事故",
        "description": "根据洪水预报，可能遭遇1000年一遇以上洪水，库水位已到达校核洪水位463.25m，且3h雨量已达100mm，入库流量迅速增大，中短期天气预报近期有较强降雨，可能出现特大暴雨。/" +
          "坝体出现大面积渗漏，且下游出现翻砂冒水现象；\n" +
          "输水洞接触渗漏特别严重，出现严重漏水，有溃坝可能；\n" +
          "溢洪道闸门无法开启，并遭遇1000年以上一遇洪水。\n",
        "measures": "应急指挥长立即赶赴现场， 会商确定应对措施，报告上级政府和有关部门，请求支援；立即组织洪水淹没区人员转移；快速召集专家组和抢险队伍，调集抢险物资和装备，开展应急处置；对事件变化和水雨情跟踪观测。"
      },
    ];
  }
}
