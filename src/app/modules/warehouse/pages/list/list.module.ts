import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { SharedModule } from 'app/shared/shared.module';
import { HeaderModule } from 'app/shared/header/header.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ListTableComponent } from './components/list-table/list-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RegisterButtonComponent } from './components/register-button/register-button.component';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ListComponent,
    ListTableComponent,
    RegisterButtonComponent,
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule,
    HeaderModule,
    LoadingBodyModule,

    //material modules
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class ListModule { }
