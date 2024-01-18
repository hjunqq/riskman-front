import { Component, OnInit } from '@angular/core';
import CustomStore from "devextreme/data/custom_store";

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.scss']
})
export class SuppliesComponent implements OnInit {
  dataSource: any;

  constructor() {
    this.dataSource = new CustomStore({
      key: 'id',
      load: () => this.getRecords(),
    });
  }

  ngOnInit(): void {
  }

  async getRecords() {
    return undefined;
  }
}
