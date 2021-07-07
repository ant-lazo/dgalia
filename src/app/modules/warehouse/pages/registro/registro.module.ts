import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroRoutingModule } from './registro-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TitleModule } from 'app/shared/title/title.module';
import { MatButtonModule } from '@angular/material/button';
import { WarehouseRegisterFormModule } from '../../components/warehouse-register-form/warehouse-register-form.module';


@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    //APP-MODULES
    TitleModule,
    WarehouseRegisterFormModule,

    //MATERIAL MODUESL
    MatIconModule,
    MatButtonModule,
    
    
  ]
})
export class RegistroModule { }
