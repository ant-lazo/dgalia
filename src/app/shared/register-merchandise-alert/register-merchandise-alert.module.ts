import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterMerchandiseAlertComponent } from './register-merchandise-alert.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    //RegisterMerchandiseAlertComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    //RegisterMerchandiseAlertComponent
  ]
})
export class RegisterMerchandiseAlertModule { }
