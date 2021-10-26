import {Component, OnInit} from '@angular/core';
import CustomStore from "devextreme/data/custom_store";

@Component({
  selector: 'app-principal-and-basis',
  templateUrl: './principal-and-basis.component.html',
  styleUrls: ['./principal-and-basis.component.scss']
})
export class PrincipalAndBasisComponent implements OnInit {
  dataSource: any;

  constructor() {
    this.dataSource = new CustomStore({
      load: () => this.getData(),
    });
  }

  ngOnInit(): void {
  }

  async getData() {
    return [
      {
        "index": 1,
        "name": "《中华人民共和国水法》",
        "remark": "（2002年10月1日起施行）"
      },
      {
        "index": 2,
        "name": "《中华人民共和国防洪法》",
        "remark": "（1998年1月1日起施行）"
      },
      {
        "index": 3,
        "name": "《中华人民共和国防汛条例》",
        "remark": "（2005年7月15日起施行）"
      },
      {
        "index": 4,
        "name": "《水库大坝安全管理条例》",
        "remark": "（1991年3月22日起施行）"
      },
      {
        "index": 5,
        "name": "《防洪标准》（GB 50201-2014）",
        "remark": ""
      },
      {
        "index": 6,
        "name": "《国家突发公共事件总体应急预案》",
        "remark": "（2006年1月8日施行）"
      },
      {
        "index": 7,
        "name": "《水库大坝安全管理应急预案编制导则》（SL/Z720－2015）",
        "remark": ""
      },
      {
        "index": 8,
        "name": "《水库防汛抢险应急预案编制大纲》",
        "remark": "（国家防汛抗旱总指挥部办公室，2006年3月）"
      }
    ];
  }
}
