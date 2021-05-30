import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookingSchedulesRoutingModule } from './cooking-schedules-routing.module';
import { CookingSchedulesComponent } from './cooking-schedules.component';
import { HeaderModule } from 'app/shared/header/header.module';
import { ListComponent } from './components/list/list.component';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LabelModule } from 'app/shared/label/label.module';


@NgModule({
  declarations: [
    CookingSchedulesComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    CookingSchedulesRoutingModule,
    HeaderModule,
    LoadingBodyModule,
    LabelModule,


    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class CookingSchedulesModule { }
