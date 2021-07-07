import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { HeaderModule } from 'app/shared/header/header.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { InfoComponent } from './components/info/info.component';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from 'app/core/pipes/pipes.module';

@NgModule({
  declarations: [
    DetailComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    HeaderModule,
    LoadingBodyModule,
    PipesModule,
  

    MatIconModule
  ]
})
export class DetailModule { }
