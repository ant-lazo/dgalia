import { NgModule } from "@angular/core";

import { CustomerComponent } from "./customer.component";
import { CustomerRoutingModule } from "./customer-routing.module";
import { UsersComponent } from '../../modules/customer/pages/users/users.component';
import { SharedModule } from 'app/shared/shared.module';
import { HeaderModule } from '../../shared/header/header.module';
import { RowButtonsModule } from 'app/shared/row-buttons/row-buttons.module';
import { UserListTableComponent } from './components/user-list-table/user-list-table.component';
import { MaterialTableModule } from 'app/shared/modules/table-modules.module';
import { MaterialBasicUitModule } from 'app/shared/modules/ui-modules.module';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsMaterialModule } from 'app/shared/modules/forms-material.module';
import { SearchBoxModule } from '../../shared/search-box/search-box.module';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';



@NgModule({
  declarations: [
    CustomerComponent,
    UsersComponent,
    UserListTableComponent,
    UserRegisterComponent,
    UserEditComponent
  ],
  imports: [
    SharedModule,
    MaterialTableModule,
    CustomerRoutingModule,
    HeaderModule,
    RowButtonsModule,
    MaterialBasicUitModule,
    MatDialogModule,
    FormsMaterialModule,
    SearchBoxModule,
    LoadingBodyModule
  ]

})
export class CustomerModule {}
