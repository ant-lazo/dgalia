import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadquarterRoutingModule } from './headquarter-routing.module';
import { HeadquarterComponent } from './headquarter.component';


@NgModule({
  declarations: [HeadquarterComponent],
  imports: [
    CommonModule,
    HeadquarterRoutingModule
  ]
})
export class HeadquarterModule { }
