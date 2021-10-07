import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderRoutingModule } from './purchase-order-routing.module';
import { PurchaseOrderComponent } from './purchase-order.component';


import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TitleModule } from 'app/shared/title/title.module';
import { MatButtonModule } from '@angular/material/button';
import {ModalOrderComponent} from './pages/modal-order/modal-order.component'
import {ModalCommentsComponent} from './pages/modal-comments/modal-comments.component'

import { HeaderModule } from 'app/shared/header/header.module';
import { FormsMaterialModule } from 'app/shared/modules/forms-material.module';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { RegisterBillsComponent } from './pages/bills/register-bills/register-bills.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { LabelModule } from 'app/shared/label/label.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ListComponent } from './pages/bills/list/list.component';
import { ListGuidesComponent } from './pages/guide/list/list.component';
import { RegisterPaymentBillsComponent } from './pages/bills/register-payment-bills/register-payment-bills.component';
import { DetailBillsComponent } from './pages/bills/detail-bills/detail-bills.component';
import { RegisterGuidesComponent } from './pages/guide/modal/register-guides/register-guides.component';
@NgModule({
  declarations: [ 
    PurchaseOrderComponent,ModalOrderComponent,ModalCommentsComponent, RegisterBillsComponent, ListComponent, RegisterPaymentBillsComponent, DetailBillsComponent,ListGuidesComponent, RegisterGuidesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PurchaseOrderRoutingModule,
    TitleModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatIconModule,
    MatOptionModule,
    HeaderModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsMaterialModule,
    LabelModule,
    LoadingBodyModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule

  ]
})
export class PurchaseOrderModule { }
