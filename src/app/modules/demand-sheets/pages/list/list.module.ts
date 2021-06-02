import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { HeaderModule } from 'app/shared/header/header.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { TableComponent } from './components/table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { LabelModule } from 'app/shared/label/label.module';
import { DeleteAlertModule } from 'app/shared/delete-alert/delete-alert.module';


@NgModule({
  declarations: [
    ListComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    HeaderModule,
    LoadingBodyModule,
    LabelModule,
    DeleteAlertModule,

    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ]
})
export class ListModule { }
