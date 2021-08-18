import { Component, OnInit } from '@angular/core';
import {Marker} from "../../shared/services/map-info.service";


export class Project{
  // @ts-ignore
  Name:string;
}
export class MenuItem{
  // @ts-ignore
  id: string;
  // @ts-ignore
  name: string;
}

@Component({
  selector: 'app-emergency-plan-home',
  templateUrl: './emergency-plan-home.component.html',
  styleUrls: ['./emergency-plan-home.component.scss']
})
export class EmergencyPlanHomeComponent implements OnInit {
  markers: any;
  withTemplateVisible: any;
  currentProject: Project;
  popupVisible: any;
  menuItems: any;

  constructor() {
    this.markers = this.getMarkers();

    this.menuItems = this.getMenuItems();

    this.withTemplateVisible = true;


    this.currentProject = new Project();
    this.currentProject.Name="Test";
  }

  ngOnInit() {
  }

  getMarkers() {
    let markers: Marker[] = [{
      location: [32.06648431970515,118.79258100648917],
      onClick: ()=>this.markerOnClick(0)
    },
      {
        location: "32.06648431970515,118.99258100648917",
        onClick: ()=>this.markerOnClick(1)
      }]
    return markers;
  }

  getMenuItems(){
    let items: MenuItem[] = [{
      id: "1",
      name: "基本信息"
    },{
      id: "2",
      name: "监测与预警"
    },{
      id: "3",
      name: "应急管理"
    },{
      id: "4",
      name: "突发事件"
    }]
    return items
  }


  markerOnClick(id: number) {
    this.popupVisible = true;
    console.log("Clicked"+ id);
  }

  mapOnClick() {
    this.popupVisible = true;
    alert('mapOnClick location:')
  }

  markerAdded($event: any) {
    const addedMarker = $event.options;
    console.log(addedMarker)
    console.log("mark added!"+ $event.location)
  }

  itemClick($event: any) {
    let item = $event.itemData;
    console.log(item)
  }
}
