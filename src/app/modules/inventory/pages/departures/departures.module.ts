import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DeparturesRoutingModule } from './departures-routing.module';
import { DeparturesComponent } from './departures.component';
import { HeaderModule } from 'app/shared/header/header.module';
import { ListComponent } from './components/list/list.component';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LabelModule } from 'app/shared/label/label.module';
import { MatDialogModule } from '@angular/material/dialog';

//import { TitleModule } from 'app/shared/title/title.module';


@NgModule({
    declarations: [
        DeparturesComponent,
        ListComponent
],
imports: [
  CommonModule,
  DeparturesRoutingModule,
  HeaderModule,
  LoadingBodyModule,
  //TitleModule,
  LabelModule,

  MatIconModule,
  MatTableModule,
  MatButtonModule,
  MatSortModule,
  MatPaginatorModule,
  MatDialogModule
]
})
export class DeparturesModule { }