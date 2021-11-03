import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryMovementsRoutingModule } from './inventory-movements-routing.module';
import { InventoryMovementsComponent } from './inventory-movements.component';
//import { RegisterInputDialogComponent } from './pages/inputs/components/register-input-dialog/register-input-dialog.component';

@NgModule({
  declarations: [
    InventoryMovementsComponent,
<<<<<<< HEAD
=======
    //RegisterInputDialogComponent
>>>>>>> 3962020d66bb84e336bde99f07f1ce67e68c513d
  ],
  imports: [
    CommonModule,
    InventoryMovementsRoutingModule
  ]
})
export class InventoryMovementsModule { }
