import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ProviderDetailDialogComponent } from './provider-detail-dialog.component';



@NgModule({
  declarations: [
    ProviderDetailDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class ProviderDetailDialogModule { }
