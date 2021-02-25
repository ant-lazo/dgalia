import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedRecipesTableComponent } from './selected-recipes-table.component';
import { FormsMaterialModule } from 'app/shared/modules/forms-material.module';
import { MaterialTableModule } from 'app/shared/modules/table-modules.module';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SelectedRecipesTableComponent
  ],
  imports: [
    CommonModule,
    MaterialTableModule,
    FormsMaterialModule,
    MatCommonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports :[
    SelectedRecipesTableComponent
  ]
})
export class SelectedRecipeTableModule { }
