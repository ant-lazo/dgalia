import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandSheetsRoutingModule } from './demand-sheets-routing.module';
import { DemandSheetsComponent } from './demand-sheets.component';


@NgModule({
  declarations: [
    DemandSheetsComponent
  ],
  imports: [
    CommonModule,
    DemandSheetsRoutingModule
  ]
})
export class DemandSheetsModule { }
