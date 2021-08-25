import { NgModule } from '@angular/core';

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


import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { LabelModule } from 'app/shared/label/label.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';

import { ListComponent } from './pages/bills/list/list.component';
@NgModule({
  declarations: [ 
    PurchaseOrderComponent,ModalOrderComponent,ModalCommentsComponent, RegisterBillsComponent, ListComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PurchaseOrderRoutingModule,
    TitleModule,
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
    NgxMatTimepickerModule

  ]
})
export class PurchaseOrderModule { }
