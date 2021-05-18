import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadquarterRoutingModule } from './headquarter-routing.module';
import { HeadquarterComponent } from './headquarter.component';

import { SharedModule } from 'app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { RowButtonsModule } from 'app/shared/row-buttons/row-buttons.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialBasicUitModule } from 'app/shared/modules/ui-modules.module';
import { FormsMaterialModule } from 'app/shared/modules/forms-material.module';
import { HeaderModule } from 'app/shared/header/header.module';
import { HeadquarterEditComponent } from './components/headquarter-edit/headquarter-edit.component';
import { HeadquarterRegisterComponent } from './components/headquarter-register/headquarter-register.component';
import { ListHeadquarterComponent } from './pages/list-headquarter/list-headquarter.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';

@NgModule({
  declarations: [
    HeadquarterComponent,
    HeadquarterEditComponent,
    HeadquarterRegisterComponent,
    ListHeadquarterComponent,
    ListTableComponent
  ],
  imports: [
    CommonModule,
    HeadquarterRoutingModule,
    CommonModule,
    SharedModule,
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
export class HeadquarterModule { }
