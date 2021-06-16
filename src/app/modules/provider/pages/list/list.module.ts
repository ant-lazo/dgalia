import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { DeleteAlertModule } from 'app/shared/delete-alert/delete-alert.module';
import { HeaderModule } from 'app/shared/header/header.module';
import { LabelModule } from 'app/shared/label/label.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { ProviderDetailDialogModule } from '../../components/provider-detail-dialog/provider-detail-dialog.module';

import { TableComponent } from './components/table/table.component';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';


@NgModule({
  declarations: [
    ListComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    HeaderModule,
    LabelModule,
    LoadingBodyModule,
    DeleteAlertModule,
    ProviderDetailDialogModule,
    

    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
  ]
})
export class ListModule { }
