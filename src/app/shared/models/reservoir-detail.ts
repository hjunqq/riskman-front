import {FilePath} from "./file-path";

export class ReservoirDetail {
  id: number;
  infonatureimage: number;
  infonatureimagepath: FilePath;
  infoprojectimage: number;
  infoprojectimagepath: FilePath;
  infoprojectlayoutimage: number;
  infoprojectlayoutimagepath: FilePath;
  infosectionimage: number;
  infosectionimagepath: FilePath;
  reservoirid: number;

  infonature: string;
  infoeconomy: string;
  infoproject: string;
  infoprojectlayout: string;
  infomonitor: string;
  infogeo: string;
  infogeoimage: number;
  infoorganize: string;
  inforules: string;
  infocontrol: string;
  infoconstructhistory: string;
  infohistory: string;
  infodetect: string;
  infogeoimagepath: FilePath;

  constructor() {
    this.infonatureimagepath = new FilePath();
    this.infoprojectimagepath = new FilePath();
    this.infoprojectlayoutimagepath = new FilePath();
    this.infosectionimagepath = new FilePath();
    this.infogeoimagepath = new FilePath();
  }
}
