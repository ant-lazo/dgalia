import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectRecipeComponent } from './select-recipe.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchBoxModule } from 'app/shared/search-box/search-box.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SelectRecipeComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    SearchBoxModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    SelectRecipeComponent,
    MatDialogModule
  ]
})
export class SelectRecipeModule { }
