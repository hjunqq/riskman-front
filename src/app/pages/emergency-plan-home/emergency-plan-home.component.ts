import { Component, OnInit } from '@angular/core';
import {MapInfoService, Marker} from "../../shared/services/map-info.service";


export class Project{
  // @ts-ignore
  Name:string;
}

@Component({
  selector: 'app-emergency-plan-home',
  templateUrl: './emergency-plan-home.component.html',
  styleUrls: ['./emergency-plan-home.component.scss']
})
export class EmergencyPlanHomeComponent implements OnInit {
  markers: any;
  withTemplateVisible: any;
  currentProject: any;
  popupVisible: any;

  constructor(customMapService: MapInfoService) {
    this.markers = this.getMarkers();

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
}
