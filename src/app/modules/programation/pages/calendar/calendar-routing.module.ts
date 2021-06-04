import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarCalendarsResolver, CalendarSettingsResolver, CalendarWeekdaysResolver } from '../mock-resolvers/calendar.resolvers';
import { CalendarComponent } from './calendar.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent,
    resolve: {
      calendars: CalendarCalendarsResolver,
      settings: CalendarSettingsResolver,
      weekdays: CalendarWeekdaysResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
