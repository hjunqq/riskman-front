import {FloodResponsiblePerson} from "./flood-responsible-person";
import {WaterSheet} from "./water-sheet";
import {WorkSheet} from "./work-sheet";
import {FilePath} from "./file-path";

export class EmergencyPlan {
  NatureOverview: string;
  EconomicOverview :string;
  EconomicOverviewPicture: FilePath;
  ProjectOverview: string;
  ProjectLayout: string;
  ProjectLayoutPicture: string;
  MainBuildings: string;
  MainBuildingsPlanLayout:string;
  MainBuildingsLongitudinalSection:string;
  MainBuildingsTypicalBuildingSection:string;
  MainBuildingsCharacteristicTable: string;
  OperationManagement:string;
  WaterRainWorkMonitoring:string;
  MonitoringInstrumentInfoTable:string;
  GeologyEarthquake:string;
  SchedulingPlan:string;
  ReservoirCapacityTable:string;
  DischargeCapacityTable:string;
  ConstructionReinforcement: string;
  OccurrenceDisasters:string;
  FloodResponsiblePersons: FloodResponsiblePerson[];
  WaterInformationInfo: WaterSheet[];
  WorkInformationInfo: WorkSheet[]
  WorkScheme: string;
  DamSafetyIdentityReport: FilePath;
  Attachment: FilePath[];
}
