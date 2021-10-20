import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
//import { DeparturesComponent } from './pages/departures/departures.component';


@NgModule({
  declarations: [
    InventoryComponent,
    //DeparturesComponent,
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
