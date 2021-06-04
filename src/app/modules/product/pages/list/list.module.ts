import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { HeaderModule } from 'app/shared/header/header.module';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PipesModule } from 'app/core/pipes/pipes.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { RegisterButtonComponent } from './components/register-button/register-button.component';
import { SearchBoxModule } from 'app/shared/search-box/search-box.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ListComponent,
    TableComponent,
    RegisterButtonComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    HeaderModule,
    PipesModule,
    SearchBoxModule,

    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    LoadingBodyModule,
    MatDialogModule
  ]
})
export class ListModule { }
