import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './coming-soon.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ComingSoonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ComingSoonComponent
  ]
})
export class ComingSoonModule { }
