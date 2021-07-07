import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBodyComponent } from './loading-body.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    LoadingBodyComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LoadingBodyComponent
  ]
})
export class LoadingBodyModule { }
