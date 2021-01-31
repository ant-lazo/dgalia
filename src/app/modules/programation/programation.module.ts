import { ProgramationRoutingModule } from './programation-routing.module';
import { ProgramationComponent } from './programation.component';
import { ProgramationCalendarComponent } from './pages/programation-calendar/programation-calendar.component';
import { SharedModule } from 'app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatOptionModule, MAT_DATE_FORMATS } from '@angular/material/core';
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



@NgModule({
  declarations: [
    ProgramationComponent,
    ProgramationCalendarComponent,
    CalendarRecurrenceComponent,
    CalendarSettingsComponent,
    CalendarSidebarComponent
  ],
  imports: [
    ProgramationRoutingModule,
    ScrollingModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatMomentDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatTooltipModule,
    FullCalendarModule,
    TreoDateRangeModule,
    MatOptionModule,
    SharedModule,
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
