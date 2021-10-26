import { Component, OnInit } from '@angular/core';
import CustomStore from "devextreme/data/custom_store";
import {ReservoirInfoService} from "../../../shared/services/reservoir-info.service";

@Component({
  selector: 'app-reservoir-info',
  templateUrl: './reservoir-info.component.html',
  styleUrls: ['./reservoir-info.component.scss']
})
export class ReservoirInfoComponent implements OnInit {
  dataSource: CustomStore;

  constructor(private reservoirInfoService:ReservoirInfoService) {
    this.dataSource = new CustomStore({
      key: 'id',
      load: () => reservoirInfoService.getAllReservoir(),
    });
  }

  ngOnInit(): void {
  }

}
