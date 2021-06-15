import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { HeaderModule } from 'app/shared/header/header.module';
import { LabelModule } from 'app/shared/label/label.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { SearchBoxModule } from 'app/shared/search-box/search-box.module';

import { FilterOptionsComponent } from './components/filter-options/filter-options.component';
import { ListOptionsComponent } from './components/list-options/list-options.component';
import { ListComponent } from './components/list/list.component';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ListComponent,
    ListOptionsComponent,
    FilterOptionsComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    HeaderModule,
    LoadingBodyModule,
    LabelModule,
    SearchBoxModule,
    FormsModule,

    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class ProductListModule { }
