import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { TitleModule } from 'app/shared/title/title.module';
import { FormComponent } from './components/form/form.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { SelectionButtonsComponent } from './components/selection-buttons/selection-buttons.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { SelectRecipeModule } from 'app/modules/recipes/components/select-recipe/select-recipe.module';
import { RegisterFormMapper } from './mappers/register-form.mapper';
import { RegisterFormHelper } from './helpers/register-form-validations.helper';
import { RegisterCookingScheduleService } from './services/register.service';


@NgModule({
  
  declarations: [
    RegisterComponent,
    FormComponent,
    RecipesComponent,
    SelectionButtonsComponent
  ],

  imports: [
    CommonModule,
    RegisterRoutingModule,
    TitleModule,
    LoadingBodyModule,
    SelectRecipeModule,



    ReactiveFormsModule,
    FormsModule,


    MatFormFieldModule,
    MatInputModule,
    MatIconModule, 
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule
  ],
  providers: [
    RegisterFormMapper,
    RegisterFormHelper,
    RegisterCookingScheduleService
  ]
})
export class RegisterModule { }
