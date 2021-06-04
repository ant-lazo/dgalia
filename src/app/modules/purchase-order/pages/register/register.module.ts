import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { InfoModule } from 'app/shared/info/info.module';
import { ComingSoonModule } from 'app/shared/coming-soon/coming-soon.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    InfoModule,
    ComingSoonModule
  ]
})
export class RegisterModule { }
