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

    //material modules
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class ListModule { }
