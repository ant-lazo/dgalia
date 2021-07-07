import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { InfoModule } from 'app/shared/info/info.module';
import { HeaderModule } from 'app/shared/header/header.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { CookingScheduleDetailModule } from 'app/modules/programation/components/cooking-schedule-detail/cooking-schedule-detail.module';
import { SupplyListComponent } from './components/supply-list/supply-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LabelModule } from 'app/shared/label/label.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { RegisterDemandSheetService } from './services/register.service';


@NgModule({
  declarations: [
    RegisterComponent,
    SupplyListComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    InfoModule,
    HeaderModule,
    LoadingBodyModule,
    CookingScheduleDetailModule,
    LabelModule,
    FormsModule,
    ReactiveFormsModule,

    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    RegisterDemandSheetService
  ]
})
export class RegisterModule { }
