import { NgModule } from '@angular/core';

import { SoupplyRoutingModule } from './soupply-routing.module';
import { SupplyListComponent } from './pages/supply-list/supply-list.component';
import { SupplyComponent } from './supply.component';
import { SharedModule } from 'app/shared/shared.module';
import { HeaderModule } from '../../shared/header/header.module';
import { RowButtonsModule } from 'app/shared/row-buttons/row-buttons.module';
import { SupplyListTableComponent } from './components/supply-list-table/supply-list-table.component';
import { MaterialTableModule } from 'app/shared/modules/table-modules.module';
import { MaterialBasicUitModule } from 'app/shared/modules/ui-modules.module';
import { SupplyRegisterComponent } from './components/supply-register/supply-register.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsMaterialModule } from 'app/shared/modules/forms-material.module';
import { SearchBoxModule } from '../../shared/search-box/search-box.module';
import { SupplyEditComponent } from './components/supply-edit/supply-edit.component';

@NgModule({
  declarations: [
    SupplyListComponent,
    SupplyComponent,
    SupplyListTableComponent,
    SupplyRegisterComponent,
    SupplyEditComponent

  ],
  imports: [
    SharedModule,
    MaterialTableModule,
    SoupplyRoutingModule,
    HeaderModule,
    RowButtonsModule,
    MaterialBasicUitModule,
    MatDialogModule,
    FormsMaterialModule,
    SearchBoxModule
  ]
})
export class SoupplyModule { }
