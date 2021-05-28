import { ProgramationRoutingModule } from './programation-routing.module';
import { ProgramationComponent } from './programation.component';
import { ProgramationCalendarComponent } from './pages/programation-calendar/programation-calendar.component';
import { SharedModule } from 'app/shared/shared.module';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { ProgramationDetailComponent } from './pages/programation-detail/programation-detail.component';
import { HeaderModule } from 'app/shared/header/header.module';
import { RowButtonsModule } from 'app/shared/row-buttons/row-buttons.module';
import { FormsMaterialModule } from 'app/shared/modules/forms-material.module';
import { SelectRecipesComponent } from './components/select-recipes/select-recipes.component';
import { MaterialTableModule } from 'app/shared/modules/table-modules.module';
import { SelectDateComponent } from './components/select-date/select-date.component';
import { ProgramationListComponent } from './pages/programation-list/programation-list.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { ProgramationDetailTableComponent } from './components/programation-detail-table/programation-detail-table.component';
import { ProgramationDetailBodyComponent } from './components/programation-detail-body/programation-detail-body.component';
import { ComingSoonModule } from 'app/shared/coming-soon/coming-soon.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ProgramationComponent,
    ProgramationCalendarComponent,
    InitialPageComponent,
    ProgramationDetailComponent,
    SelectRecipesComponent,
    SelectDateComponent,
    ListTableComponent,
    ProgramationListComponent,
    ProgramationDetailTableComponent,
    ProgramationDetailBodyComponent,
  ],
  imports: [
    ProgramationRoutingModule,
    SharedModule,
    HeaderModule,
    FormsMaterialModule,
    RowButtonsModule,
    ComingSoonModule,
    LoadingBodyModule,
  
    MatDialogModule,
    MatTooltipModule,
    MaterialTableModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule, 
    MatIconModule,
    MatMomentDateModule,
  ],
})
export class ProgramationModule { }
