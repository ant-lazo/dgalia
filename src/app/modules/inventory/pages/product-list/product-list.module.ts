import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { HeaderModule } from 'app/shared/header/header.module';
import { LabelModule } from 'app/shared/label/label.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';

import { ListComponent } from './components/list/list.component';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { ListOptionsComponent } from './components/list-options/list-options.component';
import {MatListModule} from '@angular/material/list'; 


@NgModule({
  declarations: [
    ProductListComponent,
    ListComponent,
    ListOptionsComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    HeaderModule,
    LoadingBodyModule,
    LabelModule,

    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule
  ]
})
export class ProductListModule { }
