import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from './update-routing.module';
import { UpdateComponent } from './update.component';
import { ComingSoonModule } from 'app/shared/coming-soon/coming-soon.module';

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
