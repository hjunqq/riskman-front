import {FilePath} from "./file-path";

export class EmergencyOrganization {
  id: number;
  emergencyorgimage: number;
  floodwaterdepthimage: number;
  arrivedtimeimage: number;
  evacuationimage: number;
  emergencyprocessimage: number;
  reservoirid:number;

  emergencyorgimagepath: FilePath;
  floodwaterdepthimagepath: FilePath;
  arrivedtimeimagepath: FilePath;
  evacuationimagepath: FilePath;
  emergencyprocessimagepath: FilePath;

  constructor() {
    this.emergencyorgimagepath = new FilePath();
    this.floodwaterdepthimagepath = new FilePath();
    this.arrivedtimeimagepath = new FilePath();
    this.evacuationimagepath = new FilePath();
    this.emergencyprocessimagepath = new FilePath();
  }
}
