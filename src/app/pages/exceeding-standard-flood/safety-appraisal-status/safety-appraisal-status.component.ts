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
    return [
      {
        "time": "2019年水利部交通运输部国家能源局南京水利科学研究院",
        "item": "工程质量",
        "grade": "不合格"
      },
      {
        "time": "2019年水利部交通运输部国家能源局南京水利科学研究院",
        "item": "运行管理",
        "grade": "较规范"
      },
      {
        "time": "2019年水利部交通运输部国家能源局南京水利科学研究院",
        "item": "防洪安全性",
        "grade": "B级"
      },
      {
        "time": "2019年水利部交通运输部国家能源局南京水利科学研究院",
        "item": "渗流安全性",
        "grade": "C级"
      },
      {
        "time": "2019年水利部交通运输部国家能源局南京水利科学研究院",
        "item": "结构安全性",
        "grade": "B级"
      },
      {
        "time": "2019年水利部交通运输部国家能源局南京水利科学研究院",
        "item": "金属结构安全性",
        "grade": "C级"
      }
    ]
  }
}
