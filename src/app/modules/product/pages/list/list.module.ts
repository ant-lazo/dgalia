import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { HeaderModule } from 'app/shared/header/header.module';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    ListComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    HeaderModule
  ]
})
export class ListModule { }
