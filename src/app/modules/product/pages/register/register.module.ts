import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { TitleModule } from 'app/shared/title/title.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { SelectImageModule } from 'app/shared/select-image/select-image.module';
import { SelectSupplyModule } from 'app/modules/supply/components/select-supply/select-supply.module';


@NgModule({
  declarations: [
    RegisterComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    TitleModule,
    LoadingBodyModule,
    FormsModule,
    ReactiveFormsModule,
    SelectImageModule,

    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatOptionModule,
    MatButtonModule,
    SelectSupplyModule
  ]
})
export class RegisterModule { }
