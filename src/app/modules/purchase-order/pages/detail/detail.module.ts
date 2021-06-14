import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { LabelModule } from 'app/shared/label/label.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { RowButtonsModule } from 'app/shared/row-buttons/row-buttons.module';
import { TitleModule } from 'app/shared/title/title.module';

import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { AddCommentUpdateModalComponent } from './components/add-comment-update-modal/add-comment-update-modal.component';
import { InfoComponent } from './components/info/info.component';
import { ItemsComponent } from './components/items/items.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';


@NgModule({
  declarations: [
    DetailComponent,
    InfoComponent,
    ItemsComponent,
    ActionButtonsComponent,
    ResumenComponent,
    AddCommentUpdateModalComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    LoadingBodyModule,
    TitleModule,
    LabelModule,
    RowButtonsModule,
    FormsModule,

    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatProgressBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class DetailModule { }
