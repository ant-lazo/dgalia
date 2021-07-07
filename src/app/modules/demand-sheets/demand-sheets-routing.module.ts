import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandSheetsComponent } from './demand-sheets.component';

const routes: Routes = [
  {
    path: '',
    component: DemandSheetsComponent,
    children: [
      {
        path: 'listado',
        loadChildren: () => import('./pages/list/list.module').then(l => l.ListModule)
      },
      {
        path: 'programaciones',
        loadChildren: () => import('./pages/cooking-schedules/cooking-schedules.module').then(c => c.CookingSchedulesModule)
      },
      {
        path: 'registro/:cookingScheduleCode',
        loadChildren: () => import('./pages/register/register.module').then(r => r.RegisterModule)
      },
      {
        path: 'detalle/:code',
        loadChildren: () => import('./pages/detail/detail.module').then(d => d.DetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandSheetsRoutingModule { }
