import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseRegisterFormComponent } from './warehouse-register-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WarehouseRegisterFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatOptionModule,
    MatButtonModule,
    MatSelectModule,
  ],
  exports: [
    WarehouseRegisterFormComponent
  ]
})
export class WarehouseRegisterFormModule { }
