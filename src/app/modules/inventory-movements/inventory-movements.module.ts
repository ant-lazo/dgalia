import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryMovementsRoutingModule } from './inventory-movements-routing.module';
import { InventoryMovementsComponent } from './inventory-movements.component';


@NgModule({
  declarations: [
    InventoryMovementsComponent
  ],
  imports: [
    CommonModule,
    InventoryMovementsRoutingModule
  ]
})
export class InventoryMovementsModule { }
