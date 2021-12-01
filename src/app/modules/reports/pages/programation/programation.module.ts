import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramationComponent } from './programation.component';
import { ProgramationRoutingModule } from './programation-routing.module';


@NgModule({
  declarations: [
    ProgramationComponent
  ],
  imports: [
    CommonModule,
    ProgramationRoutingModule
  ]
})
export class ProgramationModule { }
