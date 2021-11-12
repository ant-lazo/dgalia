import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValorationComponent } from './valoration.component';

import { ValorationRoutingModule } from './valoration-routing.module';

@NgModule({
  declarations: [
    ValorationComponent
  ],
  imports: [
    CommonModule,
    ValorationRoutingModule
  ]
})
export class ValorationModule { }
