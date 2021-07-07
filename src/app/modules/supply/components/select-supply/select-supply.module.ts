import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectSupplyComponent } from './select-supply.component';
import { SearchBoxModule } from 'app/shared/search-box/search-box.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SelectSupplyComponent
  ],
  imports: [
    CommonModule,
    SearchBoxModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    SelectSupplyComponent
  ]
})
export class SelectSupplyModule { }
