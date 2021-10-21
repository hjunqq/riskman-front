import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Marker} from "../../shared/services/map-info.service";
import {HttpClient} from "@angular/common/http";
import {AuthService, IUser} from "../../shared/services";
import {ReservoirInfoService} from "../../shared/services/reservoir-info.service";
import {ReservoirInfo} from "../../shared/models/reservoir-info";


export class Project {
  // @ts-ignore
  Name: string;
}

export class MenuItem {
  // @ts-ignore
  id: string;
  // @ts-ignore
  name: string;
  // @ts-ignore
  path: string;
}

@Component({
  selector: 'app-emergency-plan-home',
  templateUrl: './emergency-plan-home.component.html',
  styleUrls: ['./emergency-plan-home.component.scss']
})
export class EmergencyPlanHomeComponent implements OnInit {
  markers: Marker[];
  withTemplateVisible: any;
  currentProject: Project;
  currentReservoir: ReservoirInfo;
  popupVisible: any;
  menuItems: any;
  private user: null | IUser;
  private headers: { Authorization: string };
  private reservoir: number | undefined;
  private allReservoir: ReservoirInfo[];
  colCountByScreen: any;

  constructor(private router: Router,
              private http: HttpClient, private authService: AuthService,
              private reservoirInfoService: ReservoirInfoService) {

    this.authService.getUser().then((e) => {
      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + this.user?.token
      };
      this.reservoir = this.user?.reservoir;

      // reservoirInfoService.getAllReservoir().then((e) => {
      //   this.allReservoir = e;
      //   this.markers = [];
      //   for (const ires of this.allReservoir) {
      //     let marker:Marker = {
      //       location:[ires.latitude,ires.longitude],
      //       onClick:()=>this.markerOnClick(0)
      //     }
      //     this.markers.push(marker);
      //   }
      // })


    });

    reservoirInfoService.getAllReservoir().then((e)=>{
        this.allReservoir = e;
        this.markers = [];
        for (const ires of this.allReservoir) {
          let marker:Marker = {
            location:[ires.latitude,ires.longitude],
            onClick:()=>this.markerOnClick(ires.id),
            tooltip:{
              text:ires.name,
              isShown:true,
            }
          }
          this.markers.push(marker);
        }
    });

    // this.markers = this.getMarkers();
    this.markers = [];

    this.menuItems = this.getMenuItems();

    this.withTemplateVisible = true;


    this.currentProject = new Project();
    this.currentProject.Name = "Test";

    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }

  ngOnInit() {
  }

  // getMarkers() {
  //   let markers: Marker[] = [{
  //     location: [32.06648431970515, 118.79258100648917],
  //     onClick: () => this.markerOnClick(0)
  //   },
  //     {
  //       location: "32.06648431970515,118.99258100648917",
  //       onClick: () => this.markerOnClick(1)
  //     }];
  //   return markers;
  // }

  getMenuItems() {
    let items: MenuItem[] = [{
      id: "1",
      name: "基本信息",
      path: "/pages/basic-info-page"
    }, {
      id: "2",
      name: "监测与预警",
      path: "/pages/monitoring-and-warning"
    }, {
      id: "3",
      name: "应急管理",
      path: "/pages/emergency-management-page"
    }, {
      id: "4",
      name: "突发事件",
      path: "/pages/critical-incident-analysis"
    }]
    return items
  }


  markerOnClick(id: number | undefined) {
    this.popupVisible = true;
    for (const ires of this.allReservoir) {
      if(ires.id==id){
        this.currentReservoir = ires;
        if (ires.name != null) {
          this.currentProject.Name = ires.name;
        }
      }
    }
    console.log("Clicked " + this.currentProject.Name);
  }

  mapOnClick() {
    this.popupVisible = true;
    alert('mapOnClick location:')
  }

  markerAdded($event: any) {
    const addedMarker = $event.options;
    console.log(addedMarker)
    console.log("mark added!" + $event.location)
  }

  itemClick($event: any) {
    let item: MenuItem = $event.itemData;
    this.router.navigate([item.path])
    console.log(item)
  }

  enter_btn_click() {
    this.authService.setCurrentReservoir(this.currentReservoir.id);
  }
}
