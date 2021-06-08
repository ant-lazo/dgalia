import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderModule } from 'app/shared/header/header.module';
import { InfoModule } from 'app/shared/info/info.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { TitleModule } from 'app/shared/title/title.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { DemandSheetInfoComponent } from './components/demand-sheet-info/demand-sheet-info.component';
import { NewDocInfoComponent } from './components/new-doc-info/new-doc-info.component';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';


@NgModule({
  declarations: [
    RegisterComponent,
    NewDocInfoComponent,
    DemandSheetInfoComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    InfoModule,
    HeaderModule,
    LoadingBodyModule,
    TitleModule,
    NgxSkeletonLoaderModule,

    MatIconModule,
    MatButtonModule,
  ]
})
export class RegisterModule { }
