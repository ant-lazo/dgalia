import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValorationComponent } from './valoration.component';

import { ValorationRoutingModule } from './valoration-routing.module';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchBoxModule } from 'app/shared/search-box/search-box.module';
import { MatSelectModule } from '@angular/material/select';
import { HeaderModule } from 'app/shared/header/header.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { LabelModule } from 'app/shared/label/label.module';


@NgModule({
  declarations: [
    ValorationComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ValorationRoutingModule,
    MatSortModule,
    MatFormFieldModule,
    SearchBoxModule,
    MatSelectModule,
    HeaderModule,
    LoadingBodyModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    LabelModule
  ]
})
export class ValorationModule { }
