import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowButtonsComponent } from './row-buttons.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    RowButtonsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    RowButtonsComponent
  ]
})
export class RowButtonsModule { }
