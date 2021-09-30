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
import { EmergencyOrganizationComponent } from './pages/emergency-organization/emergency-organization.component';
import { ReservoirDetailFormComponent } from './pages/forms/reservoir-detail-form/reservoir-detail-form.component';
import { ProjectPropsFormComponent } from './pages/forms/project-props-form/project-props-form.component';
import { FloodRespPersonComponent } from './pages/forms/flood-resp-person/flood-resp-person.component';
import { EmergencyManagerFormComponent } from './pages/forms/emergency-manager-form/emergency-manager-form.component';
import { EmergencyOrgFormComponent } from './pages/forms/emergency-org-form/emergency-org-form.component';

const routes: Routes = [
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
    path: 'pages/emergency-organization',
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
  declarations: [HomeComponent, ProfileComponent, TasksComponent, EmergencyPlanHomeComponent, BasicInfoPageComponent, EmergencyManagementPageComponent, MonitoringAndWarningComponent, CriticalIncidentAnalysisComponent, EmergencyPlanFormComponent, AtlasFormComponent, AuthorityFormComponent, DownstreamVillageFormComponent, DutyFormComponent, EvacuationInfoFormComponent, PersonInfoFormComponent, ReservoirInfoFormComponent, SettlementFormComponent, SuppliesStorageFormComponent, PersonInfoPageComponent, EmergencyOrganizationComponent, ReservoirDetailFormComponent, ProjectPropsFormComponent, FloodRespPersonComponent, EmergencyManagerFormComponent, EmergencyOrgFormComponent]
})
export class AppRoutingModule { }
