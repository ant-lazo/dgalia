import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KardexRoutingModule } from './kardex-routing.module';
import { KardexComponent } from './kardex.component';
import { ComingSoonModule } from 'app/shared/coming-soon/coming-soon.module';


@NgModule({
  declarations: [
    KardexComponent
  ],
  imports: [
    CommonModule,
    KardexRoutingModule,
    ComingSoonModule
  ]
})
export class KardexModule { }
