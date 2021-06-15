import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { LabelModule } from 'app/shared/label/label.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { TitleModule } from 'app/shared/title/title.module';

import { ListComponent } from './components/list/list.component';
import { ValuesItemComponent } from './components/values-item/values-item.component';
import { ValuesComponent } from './components/values/values.component';
import { KardexRoutingModule } from './kardex-routing.module';
import { KardexComponent } from './kardex.component';

@NgModule({
  declarations: [
    KardexComponent,
    ValuesItemComponent,
    ValuesComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    KardexRoutingModule,
    LoadingBodyModule,
    TitleModule,
    LabelModule,

    MatIconModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class KardexModule { }
