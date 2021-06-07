import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from './update-routing.module';
import { ComingSoonModule } from 'app/shared/coming-soon/coming-soon.module';
import { UpdateComponent } from './update.component';


@NgModule({
  declarations: [
    UpdateComponent
  ],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    ComingSoonModule
  ]
})
export class UpdateModule { }
