import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PendingPaymentComponent } from './pending-payment.component';

const routes: Routes = [
  {
    path: '',
    component: PendingPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingPaymentRoutingModule { }