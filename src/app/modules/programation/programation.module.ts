import { ProgramationRoutingModule } from './programation-routing.module';
import { ProgramationComponent } from './programation.component';
import { ProgramationCalendarComponent } from './pages/programation-calendar/programation-calendar.component';
import { SharedModule } from 'app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TreoDateRangeModule } from '@treo/components/date-range';
import { CalendarRecurrenceComponent } from './components/recurrence/recurrence.component';
import { CalendarSettingsComponent } from './components/settings/settings.component';
import { CalendarSidebarComponent } from './components/sidebar/sidebar.component';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ProgramationDetailComponent } from './pages/programation-detail/programation-detail.component';
import { HeaderModule } from 'app/shared/header/header.module';
import { RowButtonsModule } from 'app/shared/row-buttons/row-buttons.module';
import { FormsMaterialModule } from 'app/shared/modules/forms-material.module';
import { MaterialBasicUitModule } from 'app/shared/modules/ui-modules.module';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { SelectRecipesComponent } from './components/select-recipes/select-recipes.component';
import { MaterialTableModule } from 'app/shared/modules/table-modules.module';
import { SelectedRecipesTableComponent } from './components/selected-recipes-table/selected-recipes-table.component';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { SelectDateComponent } from './components/select-date/select-date.component';
import { ProgramationListComponent } from './pages/programation-list/programation-list.component';
import { ListTableComponent } from './components/list-table/list-table.component';


@NgModule({
  declarations: [
    ProgramationComponent,
    ProgramationCalendarComponent,
    CalendarRecurrenceComponent,
    CalendarSettingsComponent,
    CalendarSidebarComponent,
    InitialPageComponent,
    RegisterPageComponent,
    ProgramationDetailComponent,
    SelectRecipesComponent,
    SelectedRecipesTableComponent,
    SelectDateComponent,
    ListTableComponent,
    ProgramationListComponent
  ],
  imports: [
    ProgramationRoutingModule,
    ScrollingModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatMenuModule,
    NgxMatNativeDateModule,
    MatMomentDateModule,
    MatSidenavModule,
    MatTooltipModule,
    FullCalendarModule,
    TreoDateRangeModule,
    SharedModule,
    HeaderModule,
    FormsMaterialModule,
    MaterialBasicUitModule,
    RowButtonsModule,
    MaterialTableModule,

    // ----------------
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
  ],
  entryComponents: [
    CalendarRecurrenceComponent
  ],
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: 'DD.MM.YYYY'
        },
        display: {
          dateInput: 'DD.MM.YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'DD.MM.YYYY',
          monthYearA11yLabel: 'MMMM YYYY'
        }
      }
    }
  ]
})
export class ProgramationModule { }
