import { Component, OnInit } from '@angular/core';
import {ProjectProps} from "../../../shared/models/project-props";
import {ReservoirInfoService} from "../../../shared/services/reservoir-info.service";

@Component({
  selector: 'app-project-properties',
  templateUrl: './project-properties.component.html',
  styleUrls: ['./project-properties.component.scss']
})
export class ProjectPropertiesComponent implements OnInit {
  projectProperties: ProjectProps[];

  constructor(private reservoirInfoService: ReservoirInfoService) {

    reservoirInfoService.getProjectProps().then((e)=>{
      this.projectProperties = e;
    })
  }

  ngOnInit() {
  }

}
