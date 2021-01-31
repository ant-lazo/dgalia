import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramationComponent } from './programation.component';
import { ProgramationCalendarComponent } from './pages/programation-calendar/programation-calendar.component';
import { CalendarCalendarsResolver, CalendarSettingsResolver, CalendarWeekdaysResolver } from './calendar.resolvers';

const routes: Routes = [
  {
    path: '',
    component: ProgramationComponent,
    children: [
      {
        path: 'calendario-programacion',
        component: ProgramationCalendarComponent,
        resolve: {
          calendars: CalendarCalendarsResolver,
          settings: CalendarSettingsResolver,
          weekdays: CalendarWeekdaysResolver
        }
      },
      { path: '', pathMatch: 'full', redirectTo: 'calendario-programacion' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramationRoutingModule { }
