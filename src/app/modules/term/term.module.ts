import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermRoutingModule } from './term-routing.module';
import { TermComponent } from './term.component';

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
import { TermEditComponent } from './components/term-edit/term-edit.component';
import { TermRegisterComponent } from './components/term-register/term-register.component';
import { ListTermComponent } from './pages/list-term/list-term.component';
import { ListTableComponent } from './components/list-table/list-table.component';

@NgModule({
  declarations: [
    TermComponent,
    ListTermComponent, 
    ListTableComponent,
    TermEditComponent,
    TermRegisterComponent
  ],
  imports: [
    CommonModule,
    TermRoutingModule,
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
  ]
})
export class TermModule { }
