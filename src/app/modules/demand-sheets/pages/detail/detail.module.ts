import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { HeaderModule } from 'app/shared/header/header.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { InfoComponent } from './components/info/info.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LabelModule } from 'app/shared/label/label.module';
import { ItemListComponent } from './components/item-list/item-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    DetailComponent,
    InfoComponent,
    ItemListComponent
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
    MatSortModule
    
  ]
})
export class DetailModule { }
