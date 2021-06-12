import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { TitleModule } from 'app/shared/title/title.module';
import { InfoComponent } from './components/info/info.component';
import { ItemsComponent } from './components/items/items.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';


@NgModule({
  declarations: [
    DetailComponent,
    InfoComponent,
    ItemsComponent,
    ActionButtonsComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    LoadingBodyModule,
    TitleModule,

    MatIconModule,
    MatButtonModule
  ]
})
export class DetailModule { }
