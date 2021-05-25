import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookingSchedulesRoutingModule } from './cooking-schedules-routing.module';
import { CookingSchedulesComponent } from './cooking-schedules.component';


@NgModule({
  declarations: [
    CookingSchedulesComponent
  ],
  imports: [
    CommonModule,
    CookingSchedulesRoutingModule
  ]
})
export class CookingSchedulesModule { }
