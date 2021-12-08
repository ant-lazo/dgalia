import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { RecipeComponent } from './recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { SelectionButtonsComponent } from './components/selection-buttons/selection-buttons.component';
import { ListComponent } from './components/list/list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from 'app/shared/header/header.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { ShowFormHelper } from './helpers/show-form-validations.helper';

@NgModule({
  declarations: [
    RecipeComponent,
    FormComponent,
    SelectionButtonsComponent,
    ListComponent

  ],
  imports: [
    CommonModule,
    LoadingBodyModule,
    HeaderModule,
    RecipeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers:[
    DatePipe,
    ShowFormHelper
  ]
})
export class RecipeModule { }
