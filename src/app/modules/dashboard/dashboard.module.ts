import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfoModule } from 'app/shared/info/info.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InfoModule
  ]
})
export class DashboardModule { }
