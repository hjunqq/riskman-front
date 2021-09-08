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
    DxPopupModule, DxProgressBarModule, DxTextAreaModule, DxTextBoxModule,
    DxTooltipModule, DxTreeViewModule
} from 'devextreme-angular';
import { EmergencyPlanHomeComponent } from './pages/emergency-plan-home/emergency-plan-home.component';
import { BasicInfoPageComponent } from './pages/basic-info-page/basic-info-page.component';
import { EmergencyManagementPageComponent } from './pages/emergency-management-page/emergency-management-page.component';
import { MonitoringAndWarningComponent } from './pages/monitoring-and-warning/monitoring-and-warning.component';
import { CriticalIncidentAnalysisComponent } from './pages/critical-incident-analysis/critical-incident-analysis.component';
import { EmergencyPlanFormComponent } from './pages/emergency-plan-form/emergency-plan-form.component';
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: 'pages/emergency-plan-form',
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
    imports: [RouterModule.forRoot(routes, {useHash: true}), DxDataGridModule, DxFormModule, DxMapModule, DxPieChartModule, DxTooltipModule, DxPopupModule, DxButtonModule, DxDrawerModule, DxMenuModule, DxTreeViewModule, DxTextAreaModule, DxFileUploaderModule, DxAccordionModule, CommonModule, DxProgressBarModule, DxTextBoxModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, TasksComponent, EmergencyPlanHomeComponent, BasicInfoPageComponent, EmergencyManagementPageComponent, MonitoringAndWarningComponent, CriticalIncidentAnalysisComponent, EmergencyPlanFormComponent]
})
export class AppRoutingModule { }
