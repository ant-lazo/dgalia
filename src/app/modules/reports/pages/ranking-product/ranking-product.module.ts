import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingProductComponent } from './ranking-product.component';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { HeaderModule } from 'app/shared/header/header.module';

import { RankingProductRoutingModule } from './ranking-product-routing.module';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { SelectionButtonsComponent } from './components/selection-buttons/selection-buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { ListComponent } from './components/list/list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { ShowFormHelper } from './helpers/show-form-validations.helper';

@NgModule({
  declarations: [
    RankingProductComponent,
    FormComponent,
    SelectionButtonsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    LoadingBodyModule,
    HeaderModule,
    RankingProductRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule
    //DatePipe
  ],
  providers:[
    DatePipe,
    ShowFormHelper
  ]
})
export class RankingProductModule { }
