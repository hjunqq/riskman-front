import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import {
  DxAccordionModule,
  DxButtonModule,
  DxDataGridModule, DxDrawerModule, DxFileUploaderModule,
  DxFormModule,
  DxMapModule, DxMenuModule,
  DxPieChartModule,
  DxPopupModule, DxProgressBarModule, DxResponsiveBoxModule, DxSelectBoxModule, DxTextAreaModule, DxTextBoxModule,
  DxTooltipModule, DxTreeViewModule
} from 'devextreme-angular';
import { EmergencyPlanHomeComponent } from './pages/emergency-plan-home/emergency-plan-home.component';
import { BasicInfoPageComponent } from './pages/basic-info-page/basic-info-page.component';
import { EmergencyManagementPageComponent } from './pages/emergency-management-page/emergency-management-page.component';
import { MonitoringAndWarningComponent } from './pages/monitoring-and-warning/monitoring-and-warning.component';
import { CriticalIncidentAnalysisComponent } from './pages/critical-incident-analysis/critical-incident-analysis.component';
import { EmergencyPlanFormComponent } from './pages/forms/emergency-plan-form/emergency-plan-form.component';
import {CommonModule} from "@angular/common";
import { AtlasFormComponent } from './pages/forms/atlas-form/atlas-form.component';
import { AuthorityFormComponent } from './pages/forms/authority-form/authority-form.component';
import { DownstreamVillageFormComponent } from './pages/forms/downstream-village-form/downstream-village-form.component';
import { DutyFormComponent } from './pages/forms/duty-form/duty-form.component';
import { EvacuationInfoFormComponent } from './pages/forms/evacuation-info-form/evacuation-info-form.component';
import { PersonInfoFormComponent } from './pages/forms/person-info-form/person-info-form.component';
import { ReservoirInfoFormComponent } from './pages/forms/reservoir-info-form/reservoir-info-form.component';
import { SettlementFormComponent } from './pages/forms/settlement-form/settlement-form.component';
import { SuppliesStorageFormComponent } from './pages/forms/supplies-storage-form/supplies-storage-form.component';
import { PersonInfoPageComponent } from './pages/person-info-page/person-info-page.component';
import { EmergencyOrganizationComponent } from './pages/emergency-organization-page/emergency-organization.component';
import { ReservoirDetailFormComponent } from './pages/forms/reservoir-detail-form/reservoir-detail-form.component';
import { ProjectPropsFormComponent } from './pages/forms/project-props-form/project-props-form.component';
import { FloodRespPersonComponent } from './pages/forms/flood-resp-person/flood-resp-person.component';
import { EmergencyManagerFormComponent } from './pages/forms/emergency-manager-form/emergency-manager-form.component';
import { EmergencyOrgFormComponent } from './pages/forms/emergency-org-form/emergency-org-form.component';
import { OverviewComponent } from './pages/basic-info/overview/overview.component';
import { ProjectOverviewComponent } from './pages/basic-info/project-overview/project-overview.component';
import { ProjectPropertiesComponent } from './pages/basic-info/project-properties/project-properties.component';
import { EngineeringChartComponent } from './pages/basic-info/engineering-chart/engineering-chart.component';
import { ReservoirManagerComponent } from './pages/person-info/reservoir-manager/reservoir-manager.component';
import { EmergencyPersonComponent } from './pages/person-info/emergency-person/emergency-person.component';
import { EmergencyDiagramComponent } from './pages/emergency-organization/emergency-diagram/emergency-diagram.component';
import { HeadquartersComponent } from './pages/emergency-organization/headquarters/headquarters.component';
import { ExpertsComponent } from './pages/emergency-organization/experts/experts.component';
import { RescueComponent } from './pages/emergency-organization/rescue/rescue.component';
import { GradeComponent } from './pages/emergency-organization/grade/grade.component';
import { ProcessComponent } from './pages/emergency-organization/process/process.component';
import { OfficeComponent } from './pages/emergency-organization/office/office.component';
import { GuaranteeAgencyComponent } from './pages/emergency-organization/guarantee-agency/guarantee-agency.component';
import { CommandAgencyComponent } from './pages/emergency-organization/command-agency/command-agency.component';
import { InfoReportComponent } from './pages/emergency-organization/info-report/info-report.component';
import { SuppliesComponent } from './pages/emergency-organization/supplies/supplies.component';
import { ContactsComponent } from './pages/emergency-organization/contacts/contacts.component';


const routes: Routes = [
  {
    path: 'pages/emergency-organization/contacts',
    component: ContactsComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/emergency-organization/supplies',
    component: SuppliesComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/emergency-organization/info-report',
    component: InfoReportComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/emergency-organization/command-agency',
    component: CommandAgencyComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/emergency-organization/guarantee-agency',
    component: GuaranteeAgencyComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/emergency-organization/office',
    component: OfficeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/emergency-organization/process',
    component: ProcessComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/emergency-organization/grade',
    component: GradeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/emergency-organization/rescue',
    component: RescueComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/emergency-diagram/experts',
    component: ExpertsComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/emergency-organization/headquarters',
    component: HeadquartersComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/emergency-organization/emergency-diagram',
    component: EmergencyDiagramComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/person-info/emergency-person',
    component: EmergencyPersonComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/person-info/reservoir-manager',
    component: ReservoirManagerComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/basic-info/engineering-chart',
    component: EngineeringChartComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/basic-info/project-properties',
    component: ProjectPropertiesComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'basic-info/project-overview',
    component: ProjectOverviewComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/basic-info/overview',
    component: OverviewComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/form/emergency-org-form',
    component: EmergencyOrgFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/forms/emergency-manager-form',
    component: EmergencyManagerFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/forms/flood-resp-person',
    component: FloodRespPersonComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/forms/project-props-form',
    component: ProjectPropsFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/forms/reservoir-detail-form',
    component: ReservoirDetailFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/emergency-organization-page',
    component: EmergencyOrganizationComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/person-info-page',
    component: PersonInfoPageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/forms/supplies-storage-form',
    component: SuppliesStorageFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/forms/settlement-form',
    component: SettlementFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/forms/reservoir-info-form',
    component: ReservoirInfoFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/forms/person-info-form',
    component: PersonInfoFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/forms/evacuation-info-form',
    component: EvacuationInfoFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/forms/duty-form',
    component: DutyFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/forms/downstream-village-form',
    component: DownstreamVillageFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/forms/authority-form',
    component: AuthorityFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/forms/atlas-form',
    component: AtlasFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/forms/emergency-plan-form',
    component: EmergencyPlanFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/critical-incident-analysis',
    component: CriticalIncidentAnalysisComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/monitoring-and-warning',
    component: MonitoringAndWarningComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/emergency-management-page',
    component: EmergencyManagementPageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/basic-info-page',
    component: BasicInfoPageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/emergency-plan-home',
    component: EmergencyPlanHomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: EmergencyPlanHomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), DxDataGridModule, DxFormModule, DxMapModule, DxPieChartModule, DxTooltipModule, DxPopupModule, DxButtonModule, DxDrawerModule, DxMenuModule, DxTreeViewModule, DxTextAreaModule, DxFileUploaderModule, DxAccordionModule, CommonModule, DxProgressBarModule, DxTextBoxModule, DxResponsiveBoxModule, DxSelectBoxModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, TasksComponent, EmergencyPlanHomeComponent, BasicInfoPageComponent, EmergencyManagementPageComponent, MonitoringAndWarningComponent, CriticalIncidentAnalysisComponent, EmergencyPlanFormComponent, AtlasFormComponent, AuthorityFormComponent, DownstreamVillageFormComponent, DutyFormComponent, EvacuationInfoFormComponent, PersonInfoFormComponent, ReservoirInfoFormComponent, SettlementFormComponent, SuppliesStorageFormComponent, PersonInfoPageComponent, EmergencyOrganizationComponent, ReservoirDetailFormComponent, ProjectPropsFormComponent, FloodRespPersonComponent, EmergencyManagerFormComponent, EmergencyOrgFormComponent, OverviewComponent, ProjectOverviewComponent, ProjectPropertiesComponent, EngineeringChartComponent, ReservoirManagerComponent, EmergencyPersonComponent, EmergencyDiagramComponent, HeadquartersComponent, ExpertsComponent, RescueComponent, GradeComponent, ProcessComponent, OfficeComponent, GuaranteeAgencyComponent, CommandAgencyComponent, InfoReportComponent, SuppliesComponent, ContactsComponent]
})
export class AppRoutingModule { }
