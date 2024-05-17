import { NgModule } from '@angular/core';
import { DxPopupModule, DxFormModule, DxTextBoxModule, DxButtonModule, DxValidatorModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SingleCardModule } from './layouts';
import jsPDF from 'jspdf';

import {
  AppFooterModule,
  ResetPasswordFormModule,
  CreateAccountFormModule,
  ChangePasswordFormModule,
  LoginFormModule,
} from './components';

import { AuthService, ScreenService, AppInfoService } from './services';
import { UnauthenticatedContentModule } from './layouts/unauthenticated-content/unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { CrmContactListModule } from './pages/crm-contact-list/crm-contact-list.component';
import { CrmContactDetailsModule } from './pages/crm-contact-details/crm-contact-details.component';
import { CrmExtractInvoiceModule } from './pages/crm-extract-invoice/crm-extract-invoice.component';
import { PlanningTaskListModule } from './pages/planning-task-list/planning-task-list.component';
import { PlanningTaskDetailsModule } from './pages/planning-task-details/planning-task-details.component';
import { AnalyticsDashboardModule } from './pages/analytics-dashboard/analytics-dashboard.component';
import { AnalyticsSalesReportModule } from './pages/analytics-sales-report/analytics-sales-report.component';
import { AnalyticsGeographyModule } from './pages/analytics-geography/analytics-geography.component';
import { ThemeService } from './services';
import { Column } from 'jspdf-autotable';


@NgModule({
  declarations: [
    AppComponent,
   
  
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SingleCardModule,
    AppFooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    ReactiveFormsModule,
    CrmContactListModule,
    CrmContactDetailsModule,
    CrmExtractInvoiceModule,
    PlanningTaskListModule,
    PlanningTaskDetailsModule,
    AnalyticsDashboardModule,
    AnalyticsSalesReportModule,
    AnalyticsGeographyModule,
    NgxExtendedPdfViewerModule,
    AppRoutingModule,
    DxDataGridModule,

  ],
  providers: [AuthService, ScreenService, AppInfoService, ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule { }


