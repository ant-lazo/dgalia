import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { MatOption, MatOptionModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { CalendarRecurrenceComponent } from './components/recurrence/recurrence.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TreoDateRangeModule } from '@treo/components/date-range';
import { HeaderModule } from 'app/shared/header/header.module';
import { LoadingBodyModule } from 'app/shared/loading-body/loading-body.module';
import { FormsMaterialModule } from 'app/shared/modules/forms-material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CalendarSidebarComponent } from '../../components/sidebar/sidebar.component';
import { CalendarSettingsComponent } from '../../components/settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    CalendarComponent,
    CalendarSidebarComponent,
    CalendarRecurrenceComponent,
    CalendarSettingsComponent,
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    LoadingBodyModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatMenuModule,
    MatMomentDateModule,
    MatSidenavModule,
    MatTooltipModule,
    FullCalendarModule,
    TreoDateRangeModule,
    HeaderModule,
    FormsMaterialModule,
    MatFormFieldModule,
    MatOptionModule,

    MatIconModule,
    MatButtonModule,
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
export class CalendarModule { }
