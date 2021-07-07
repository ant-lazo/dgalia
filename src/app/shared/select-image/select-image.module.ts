import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectImageComponent } from './select-image.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SelectImageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMatFileInputModule,
    MatIconModule,    
  ],
  exports: [
    SelectImageComponent
  ]
})
export class SelectImageModule { }
