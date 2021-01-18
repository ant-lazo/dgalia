import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeasuredUnitsRoutingModule } from './measured-units-routing.module';
import { MeasuredUnitsComponent } from './measured-units.component';
import { ListComponent } from './pages/list/list.component';
import { HeaderModule } from '../../shared/header/header.module';
import { MatIconModule } from '@angular/material/icon';
import { RowButtonsModule } from '../../shared/row-buttons/row-buttons.module';
import { ListTableComponent } from './components/list-table/list-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MeasuredUnitsComponent,
    ListComponent,
    ListTableComponent,
  ],
  imports: [
    CommonModule,
    MeasuredUnitsRoutingModule,
    HeaderModule,
    MatIconModule,
    RowButtonsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule
  ]
})
export class MeasuredUnitsModule { }
