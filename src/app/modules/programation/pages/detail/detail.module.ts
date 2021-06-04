import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { HeaderModule } from 'app/shared/header/header.module';
import { CookingScheduleDetailModule } from '../../components/cooking-schedule-detail/cooking-schedule-detail.module';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { LabelModule } from 'app/shared/label/label.module';


@NgModule({
  declarations: [
    DetailComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    LoadingBodyModule,
    HeaderModule,
    CookingScheduleDetailModule,
    LabelModule,

    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule
  ]
})
export class DetailModule { }
