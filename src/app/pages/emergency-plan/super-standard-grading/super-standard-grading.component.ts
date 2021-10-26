import { Component, OnInit } from '@angular/core';
import CustomStore from "devextreme/data/custom_store";

@Component({
  selector: 'app-super-standard-grading',
  templateUrl: './super-standard-grading.component.html',
  styleUrls: ['./super-standard-grading.component.scss']
})
export class SuperStandardGradingComponent implements OnInit {
  humanGrade: any;
  societyGrade: any;

  constructor() {
    this.humanGrade = new CustomStore({
      load: () => this.getHumanGrade(),
    });
    this.societyGrade = new CustomStore({
      load: () => this.getSocietyGrade(),
    });
  }

  ngOnInit(): void {
  }

  async getHumanGrade() {
    return [
      {
        "grade": "人员死亡L(人)",
        "level1": "L≥30",
        "level2": "30>L≥10",
        "level3": "10>L≥3",
        "level4": "L<3"
      },
      {
        "grade": "经济损失E(万元)",
        "level1": "E≥10000",
        "level2": "10000>E≥5000",
        "level3": "5000>E≥1000",
        "level4": "E<1000"
      },
    ];
  }

  async getSocietyGrade() {
    return [
      {
        "grade": "风险人口(人)",
        "level1": ">106",
        "level2": "104~106",
        "level3": "102~104",
        "level4": "1-102"
      },
      {
        "grade": "城镇",
        "level1": "地级市",
        "level2": "主要城区",
        "level3": "乡镇政府所在地",
        "level4": "乡村和散户"
      },
      {
        "grade": "重要设施",
        "level1": "国家级重要交通、输电、油气干线及厂矿企业和军事设施",
        "level2": "省级重要交通、输电、油气干线及厂矿企业",
        "level3": "市级重要交通、输电、油气干线及厂矿企业",
        "level4": "一般性"
      },
      {
        "grade": "文物古迹艺术珍品",
        "level1": "国家级重点文物保护古迹、艺术珍品",
        "level2": "省级重点保护文物古迹、艺术珍品",
        "level3": "市级重点保护文物古迹、艺术珍品",
        "level4": "县级文物古迹、艺术珍品"
      },
      {
        "grade": "河道形态",
        "level1": "大江大河改道",
        "level2": "一般河流改道、大江大河遭受严重破坏",
        "level3": "一般河流遭受严重破坏、大江大河遭受一般性破坏",
        "level4": "一般河流遭受一定破坏"
      },
      {
        "grade": "生物及生长栖息地",
        "level1": "稀有动植物及其栖息地丧失",
        "level2": "较珍贵动植物及其栖息地丧失",
        "level3": "有一定价值的动植物及其栖息地丧失",
        "level4": "一般动植物及其栖息地丧失"
      },
      {
        "grade": "人文景观",
        "level1": "国家级人文景观遭破坏",
        "level2": "省级人文景观遭破坏",
        "level3": "市级人文景观遭破坏",
        "level4": "自然景观遭轻微破坏"
      },
      {
        "grade": "工业污染",
        "level1": "大规模化工厂、农药厂和污染源",
        "level2": "较大规模化工厂、农药厂和污染源",
        "level3": "大规模化工厂、农药厂和污染源",
        "level4": "一般性化工厂、农药厂和污染源"
      }
    ];
  }
}
