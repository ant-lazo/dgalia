import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePageRoutingModule } from './update-page-routing.module';
import { UpdatePageComponent } from './update-page/update-page.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MaterialTableModule } from 'app/shared/modules/table-modules.module';
import { RowButtonsModule } from 'app/shared/row-buttons/row-buttons.module';
import { HeaderModule } from 'app/shared/header/header.module';
import { FormsMaterialModule } from 'app/shared/modules/forms-material.module';
import { MaterialBasicUitModule } from 'app/shared/modules/ui-modules.module';
import { SharedModule } from 'app/shared/shared.module';
import { UpdateFormComponent } from './components/update-form/update-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SelectedRecipeTableModule } from '../../components/selected-recipe-table/selected-recipe-table.module';
import { ComingSoonModule } from 'app/shared/coming-soon/coming-soon.module';


@NgModule({
  declarations: [
    UpdatePageComponent,
    UpdateFormComponent,
  ],
  imports: [
    CommonModule,
    UpdatePageRoutingModule,
    ComingSoonModule,

    RowButtonsModule,
    MaterialTableModule,
    SharedModule,
    HeaderModule,
    FormsMaterialModule,
    MaterialBasicUitModule,
    MatDialogModule,
    SelectedRecipeTableModule,

    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,

  ]
})
export class UpdatePageModule { }
