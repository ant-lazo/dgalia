import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ComingSoonModule } from 'app/shared/coming-soon/coming-soon.module';
import { ListComponent } from './list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    ComingSoonModule
  ]
})
export class ListModule { }
