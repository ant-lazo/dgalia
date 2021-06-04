import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    InfoComponent
  ]
})
export class InfoModule { }
