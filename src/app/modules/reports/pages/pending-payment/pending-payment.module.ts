import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingPaymentComponent } from './pending-payment.component';
import { PendingPaymentRoutingModule } from './pending-payment-routing.module';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { SelectionButtonsComponent } from './components/selection-buttons/selection-buttons.component';

@NgModule({
  declarations: [
    PendingPaymentComponent,
    FormComponent,
    ListComponent,
    SelectionButtonsComponent
  ],
  imports: [
    CommonModule,
    PendingPaymentRoutingModule
  ]
})
export class PendingPaymentModule { }
