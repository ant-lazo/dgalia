import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRoutingModule } from './update-routing.module';
import { UpdateComponent } from './update.component';
import { TitleModule } from 'app/shared/title/title.module';
import { WarehouseRegisterFormModule } from '../../components/warehouse-register-form/warehouse-register-form.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';


@NgModule({
  declarations: [
    UpdateComponent
  ],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    TitleModule,
    WarehouseRegisterFormModule,
    LoadingBodyModule
  ]
})
export class UpdateModule { }
