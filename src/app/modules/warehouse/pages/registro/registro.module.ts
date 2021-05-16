import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {  MatOptionModule } from '@angular/material/core';
import { TitleModule } from 'app/shared/title/title.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent,
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    //APP-MODULES
    TitleModule,

    //MATERIAL MODUESL
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatOptionModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule
  ]
})
export class RegistroModule { }
