import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { HeaderModule } from 'app/shared/header/header.module';
import { LabelModule } from 'app/shared/label/label.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';

import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { InfoComponent } from './components/info/info.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';


@NgModule({
  declarations: [
    DetailComponent,
    InfoComponent,
    ItemListComponent,
    ActionButtonsComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    HeaderModule,
    LoadingBodyModule,
    LabelModule,

    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule
  ]
})
export class DetailModule { }
