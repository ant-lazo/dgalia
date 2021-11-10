import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';

import { RegisterOutputDialogComponent } from './register-output-dialog.component';
//import { RegisterInputDialogComponent } from '../../../inputs/components/register-input-dialog/register-input-dialog.component';

@NgModule({
  declarations: [
    RegisterOutputDialogComponent,
    //RegisterInputDialogComponent
  ],
  imports: [
    CommonModule,
    LoadingBodyModule,
    FormsModule,
    ReactiveFormsModule,

    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    MatFormFieldModule
  ],
  exports: [
    MatDialogModule,
    RegisterOutputDialogComponent,
    //RegisterInputDialogComponent
  ]
})
export class RegisterOutputDialogModule { }
