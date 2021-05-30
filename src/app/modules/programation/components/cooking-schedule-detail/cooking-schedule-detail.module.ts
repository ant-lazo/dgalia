import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookingScheduleDetailComponent } from './cooking-schedule-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LabelModule } from 'app/shared/label/label.module';



@NgModule({
  declarations: [
    CookingScheduleDetailComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    LabelModule
  ],
  exports: [
    CookingScheduleDetailComponent
  ]
})
export class CookingScheduleDetailModule { }
