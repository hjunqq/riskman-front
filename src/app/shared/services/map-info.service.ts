import {Injectable} from '@angular/core';
import DxNotify from "devextreme/ui/notify"

export class Tooltip {
  // @ts-ignore
  isShown: boolean;
}

export class Marker {
  location: any;
  onClick: any;
}



@Injectable({
  providedIn: 'root'
})
export class MapInfoService {
  private popupVisible: boolean = false;

  constructor() {
  }
  getMarkers() {

  }

  markerOnClick() {
    this.popupVisible = true;
    console.log("Clicked")
  }

  getPopupVisible() {
    return this.popupVisible;
  }
}
