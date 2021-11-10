import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KardexComponent } from './kardex.component';

import { KardexRoutingModule } from './kardex-routing.module';

@NgModule({
  declarations: [
    KardexComponent
  ],
  imports: [
    CommonModule,
    KardexRoutingModule
  ]
})
export class KardexModule { }
