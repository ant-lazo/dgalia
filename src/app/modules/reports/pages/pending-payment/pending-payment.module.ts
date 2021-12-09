import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingPaymentComponent } from './pending-payment.component';
import { PendingPaymentRoutingModule } from './pending-payment-routing.module';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { SelectionButtonsComponent } from './components/selection-buttons/selection-buttons.component';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { HeaderModule } from 'app/shared/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ShowFormHelper } from "./helpers/show-form-pending-payment.helpers";


@NgModule({
  declarations: [
    PendingPaymentComponent,
    FormComponent,
    ListComponent,
    SelectionButtonsComponent
  ],
  imports: [
    CommonModule,
    LoadingBodyModule,
    HeaderModule,
    PendingPaymentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers:[
    ShowFormHelper
  ]
})
export class PendingPaymentModule { }
