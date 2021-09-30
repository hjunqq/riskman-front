import { Component, OnInit } from '@angular/core';
import {TreeViewItem} from "../../shared/models/tree-view.item";
import {HttpClient} from "@angular/common/http";
import {AuthService, IUser} from "../../shared/services";
import {ReservoirInfoService} from "../../shared/services/reservoir-info.service";
import {ReservoirDetail} from "../../shared/models/reservoir-detail";
import {PersonInfoService} from "../../shared/services/person-info.service";
import {FloodPersonService} from "../../shared/services/flood-person.service";
import {EmergencyManager} from "../../shared/models/emergency-manager";
import {EmergencyManagerService} from "../../shared/services/emergency-manager.service";

@Component({
  selector: 'app-person-info-page',
  templateUrl: './person-info-page.component.html',
  styleUrls: ['./person-info-page.component.scss']
})
export class PersonInfoPageComponent implements OnInit {
  treeInfo: any;
  IsReservoirManager: boolean;
  IsEmergencyManager: boolean;
  private currentItem: any;
  managerOverview: any;
  managerData:any;
  floodPersonData: any;
  emergencyPersonData: any;
  private user: null | IUser;
  private headers: { Authorization: string };
  private reservoir: number | undefined;
  reservoirDetails: ReservoirDetail;

  constructor(private http: HttpClient, private authService: AuthService,
              private reservoirInfoService: ReservoirInfoService,
              private personInfoService:PersonInfoService,
              private floodPersonService: FloodPersonService,
              private emergencyManagerService: EmergencyManagerService,
  ) {

    this.authService.getUser().then((e) => {
      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + this.user?.token
      };
      this.reservoir = this.user?.reservoir;

      reservoirInfoService.getReservoirDetails(this.reservoir).then((e) => {
        this.reservoirDetails = e;
      })

      personInfoService.getPerson(this.reservoir).then((e)=>{
        this.managerData = e;
      })

      floodPersonService.getFloodPerson(this.reservoir).then((e)=>{
        this.floodPersonData = e;
      })

      emergencyManagerService.getEmergencyManager(this.reservoir).then((e)=>{
        this.emergencyPersonData = e;
      })


    });

    this.reservoirDetails = new ReservoirDetail();

    this.treeInfo = PersonInfoPageComponent.getInfo();

    this.IsReservoirManager = true;

    this.managerOverview = "双城水库管理所筹建于水库建设初期，事业单位编制(企业管理)，隶属县水务局领导，编制12人，其中管理人员编制2名、专业技术人员编制8名、工勤人员2名，股级领导2名（1正1副）"
  }

  ngOnInit() {
  }

  selectItem($event: any) {
    this.currentItem = $event.itemData;
    if (this.currentItem.value === "ReservoirManager") {
      this.setAllFalse();
      this.IsReservoirManager = true;
    } else if (this.currentItem.value === "EmergencyManager") {
      this.setAllFalse();
      this.IsEmergencyManager = true;
    }
  }

  private setAllFalse() {
    this.IsReservoirManager = false;
    this.IsEmergencyManager = false;
  }

  private static getInfo() {
    let infos: TreeViewItem[] = [{
      id: "1",
      text: "水库管理人员",
      value: "ReservoirManager",
    },{
      id:"2",
      text:"应急管理人员",
      value: "EmergencyManager",
    }];
    return infos;
  }
}
