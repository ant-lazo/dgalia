import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramationComponent } from './programation.component';
import { ProgramationCalendarComponent } from './pages/programation-calendar/programation-calendar.component';
import { CalendarCalendarsResolver, CalendarSettingsResolver, CalendarWeekdaysResolver } from './pages/mock-resolvers/calendar.resolvers';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ProgramationDetailComponent } from './pages/programation-detail/programation-detail.component';
import { ProgramationListComponent } from './pages/programation-list/programation-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramationComponent,
    children: [
      {
        path: 'calendario',
        component: ProgramationCalendarComponent,
        resolve: {
          calendars: CalendarCalendarsResolver,
          settings: CalendarSettingsResolver,
          weekdays: CalendarWeekdaysResolver
        }
      },
      { path: 'pagina-inicial', component: InitialPageComponent },
      { path: 'registro', component: RegisterPageComponent },
      { path: 'detalle/:id', component: ProgramationDetailComponent },
      { path: 'editar/:id', loadChildren: () => import('./pages/update-page/update-page.module').then(u => u.UpdatePageModule) },
      { path: 'listado/:start/:end', component: ProgramationListComponent },
      { path: 'listado', component: ProgramationListComponent },
      { path: '', pathMatch: 'full', redirectTo: 'pagina-inicial' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramationRoutingModule { }
