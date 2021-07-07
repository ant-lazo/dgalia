import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { HeaderModule } from 'app/shared/header/header.module';
import { InfoModule } from 'app/shared/info/info.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { SearchBoxModule } from 'app/shared/search-box/search-box.module';
import { TitleModule } from 'app/shared/title/title.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { DemandSheetInfoComponent } from './components/demand-sheet-info/demand-sheet-info.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { NewDocInfoComponent } from './components/new-doc-info/new-doc-info.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SelectProductDialogComponent } from './components/selec-product-dialog/select-product-dialog.component';
import { SelectedProductCardComponent } from './components/selected-product-card/selected-product-card.component';
import { TopActionButtonsComponent } from './components/top-action-buttons/top-action-buttons.component';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterService } from './services/register.service';


@NgModule({
  declarations: [
    RegisterComponent,
    NewDocInfoComponent,
    DemandSheetInfoComponent,
    TopActionButtonsComponent,
    SelectProductDialogComponent,
    SelectedProductCardComponent,
    ProductListComponent,
    ListTableComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    InfoModule,
    HeaderModule,
    LoadingBodyModule,
    TitleModule,
    NgxSkeletonLoaderModule,
    SearchBoxModule,
    ReactiveFormsModule,
    FormsModule,

    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatDividerModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [
    RegisterService
  ]
})
export class RegisterModule { }
