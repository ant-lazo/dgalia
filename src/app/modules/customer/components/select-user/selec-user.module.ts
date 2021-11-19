import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectUserComponent } from './select-user.component';
import { SearchBoxModule } from 'app/shared/search-box/search-box.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SelectUserComponent
  ],
  imports: [
    CommonModule,
    SearchBoxModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    SelectUserComponent
  ]
})
export class SelectUserModule { }