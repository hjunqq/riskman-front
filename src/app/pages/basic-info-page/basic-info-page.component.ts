import {Component, NgModule, OnInit} from '@angular/core';
import {TreeViewItem} from "../../shared/models/tree-view.item";
import {HttpClient} from "@angular/common/http";
import {AuthService, IUser} from "../../shared/services";
import {ReservoirInfoService} from "../../shared/services/reservoir-info.service";
import {IReservoirInfo} from "../../shared/models/IReservoirInfo";
import {ReservoirDetail} from "../../shared/models/reservoir.detail";


@Component({
  selector: 'app-basic-info-page',
  templateUrl: './basic-info-page.component.html',
  styleUrls: ['./basic-info-page.component.scss']
})
export class BasicInfoPageComponent implements OnInit {
  infos: any;
  basinOverview: any;
  basinOverviewImage: any;

  projectOverview: any;
  projectOverviewImage: any;

  projectProperties: any;

  IsProjectOverview: boolean;
  IsBasinOverView: boolean;
  IsProjectProperties: boolean;
  IsEngineeringChart: boolean;
  damSectionImage: any;
  geologicalImage: any;
  private currentItem: TreeViewItem;
  private user: null | IUser;
  private headers: { Authorization: string };
  private reservoir: number | undefined;
  private currentReservoir: IReservoirInfo;
  reservoirDetails: ReservoirDetail;


  constructor(private http: HttpClient, private authService: AuthService, private reservoirInfoService: ReservoirInfoService) {

    this.authService.getUser().then((e) => {
      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + this.user?.token
      };
      this.reservoir = this.user?.reservoir;

      reservoirInfoService.getReservoir(this.reservoir).then((e) => {
        this.currentReservoir = e;
      });

      reservoirInfoService.getReservoirDetails(this.reservoir).then((e) => {
        this.reservoirDetails = e;
      })

    });

    this.reservoirDetails = new ReservoirDetail();

    this.infos = BasicInfoPageComponent.getInfos();

    this.basinOverview = this.getBasinOverview();
    this.basinOverviewImage = this.getBasinOverviewImage();
    this.projectProperties = this.getProjectProperties();
    this.projectOverviewImage = this.getProjectOverviewImage();


    this.IsBasinOverView = true;
    this.IsProjectOverview = true;
    this.IsProjectProperties = true;
    this.IsEngineeringChart = true;
    this.setAllFalse();
    this.IsBasinOverView = true;
  }

  ngOnInit() {

  }

  selectItem($event: any) {
    this.currentItem = $event.itemData;
    if (this.currentItem.value === "BasinOverView") {
      this.setAllFalse();
      this.IsBasinOverView = true;
    } else if (this.currentItem.value === "ProjectOverview") {
      this.setAllFalse();
      this.IsProjectOverview = true;
    } else if (this.currentItem.value === "ProjectProperties") {
      this.setAllFalse();
      this.IsProjectProperties = true;
    } else if (this.currentItem.value === "EngineeringChart") {
      this.setAllFalse();
      this.IsEngineeringChart = true;
    }
  }

  private setAllFalse() {
      this.IsBasinOverView = false;
      this.IsProjectOverview = false;
      this.IsProjectProperties = false;
      this.IsEngineeringChart = false;
  }

  private static getInfos() {
    let infos: TreeViewItem[] = [{
      id: "1",
      text: "工程平面图",
      value: "BasinOverView",
    },{
      id:"2",
      text:"主要建筑物",
      value: "ProjectOverview",
    },{
      id:"3",
      text:"工程特性表",
      value: "ProjectProperties",
    },{
      id:"4",
      text:"工程图表",
      value: "EngineeringChart",
    }];
    return infos;
  }

  private getBasinOverview() {
      return "突泉县双城水库位于嫩江流域洮儿河一级支流蛟流河上，突泉县宝石镇双城屯北2.5公里处，地理位置处于东经121°12′22.9\"，北纬45°48′45.3\"，距离县城所在地75公里。所在流域为嫩江流域，坝址以上控制流域面积910平方公里，坝址以上河长47.2km，河谷宽约1.2km，河道平均比降6.6‰。\n" +
        "双城水库是一座以防洪为主，兼顾水产养殖、灌溉、旅游等综合效益的中型水库。双城水库承担着下游“三镇两乡一农场”防洪的重要任务，共保护下游21万人口、32万亩耕地及省际通道、乌突公路等设施，并为下游突泉镇供水工程提供可靠的水源保障。" +
        "水库控制灌溉面积12万亩，其中水田3万亩，作物以水稻为主，旱田9万亩，主要作物为玉米、大豆。双城水库利用水库的水资源发展水产养殖业，历年效益很大，水库除险加固后，可有效增加水产养殖水城面积，使水库的水产养殖业稳定发展。"
  }

  private getBasinOverviewImage() {
    return "http://localhost:6060/api/files/OverviewImage.png";
  }

  private getProjectProperties() {
    return [
      {
        "name":"水库名称",
        "value":"双城水库"
      },
      {
        "name":"建设地点",
        "value":"东经121°18′、北纬45°36′ "
      },
      {
        "name":"所在河流",
        "value":"嫩江流域蛟流河"
      },
      {
        "name":"流域面积(km2)",
        "value":"6170"
      },
      {
        "name":"管理单位名称",
        "value":"双城水库管理所 "
      },
      {
        "name":"主管单位名称",
        "value":"突泉县水利局 "
      },
      {
        "name":"竣工日期",
        "value":"2004年10月21日"
      },
      {
        "name":"工程等别",
        "value":"Ⅲ"
      },
      {
        "name":"地震基本烈度/抗震设计烈度",
        "value":"Ⅵ"
      },
      {
        "name":"多年平均降水量（mm）",
        "value":"400"
      },
      {
        "name":"设计洪水标准（%）",
        "value":"2"
      },
      {
        "name":"设计洪峰流量（m3/s）",
        "value":"678"
      },
      {
        "name":"设计3日洪量（106m3）",
        "value":"84.12 "
      },
      {
        "name":"校核洪水标准（%）",
        "value":"0.1"
      },
      {
        "name":"校核洪峰流量（m3/s) ",
        "value":"1430"
      },
      {
        "name":"校核3日洪量（106m3）",
        "value":"84.12 "
      },
      {
        "name":"3日洪量（106m3）",
        "value":"84.12 "
      },
      {
        "name":"3日洪量（106m3）",
        "value":"84.12 "
      },
      {
        "name":"3日洪量（106m3）",
        "value":"84.12 "
      },
      {
        "name":"3日洪量（106m3）",
        "value":"84.12 "
      },
      {
        "name":"3日洪量（106m3）",
        "value":"84.12 "
      },
      {
        "name":"3日洪量（106m3）",
        "value":"84.12 "
      },
      {
        "name":"3日洪量（106m3）",
        "value":"84.12 "
      },
      {
        "name":"3日洪量（106m3）",
        "value":"84.12 "
      },
      {
        "name":"3日洪量（106m3）",
        "value":"84.12 "
      },
    ]
  }

  private getProjectOverviewImage() {
    return "http://localhost:6060/api/files/ProjectOverviewImage.png";
  }
}


