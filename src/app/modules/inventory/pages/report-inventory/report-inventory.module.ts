import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportInventoryComponent } from './report-inventory.component';
import { ReportInventoryRoutingModule } from './report-inventory-routing.module';


@NgModule({
  declarations: [
    ReportInventoryComponent
  ],
  imports: [
    CommonModule,
    ReportInventoryRoutingModule
  ],
  exports:[
  ]
})
export class ReportInventoryModule { }
