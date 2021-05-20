import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateComponent } from './update.component';
import { TitleModule } from 'app/shared/title/title.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SelectSupplyModule } from 'app/modules/supply/components/select-supply/select-supply.module';
import { SelectImageModule } from 'app/shared/select-image/select-image.module';
import { UpdateRoutingModule } from './update-routing.module';
import { PipesModule } from 'app/core/pipes/pipes.module';

@NgModule({
  declarations: [
    UpdateComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    TitleModule,
    LoadingBodyModule,
    FormsModule,
    ReactiveFormsModule,
    SelectImageModule,
    SelectImageModule,
    TitleModule,
    PipesModule,

    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatOptionModule,
    MatButtonModule,
    SelectSupplyModule,
  ]
})
export class UpdateModule { }
