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
import { SharedModule } from 'app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MeasuredUnitEditComponent } from './components/measured-unit-edit/measured-units-edit.component';
import { MeasuredUnitRegisterComponent } from './components/measured-units-register/measured-units-register.component';
import { FormsMaterialModule } from 'app/shared/modules/forms-material.module';
import { MaterialBasicUitModule } from 'app/shared/modules/ui-modules.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';


@NgModule({
  declarations: [
    MeasuredUnitsComponent,
    ListComponent,
    ListTableComponent,
    MeasuredUnitEditComponent,
    MeasuredUnitRegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MeasuredUnitsRoutingModule,
    HeaderModule,
    MatIconModule,
    RowButtonsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    MaterialBasicUitModule,
    FormsMaterialModule,
    LoadingBodyModule
  ]
})
export class MeasuredUnitsModule { }
