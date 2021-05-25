import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogisticsComponent } from './logistics.component';

const routes: Routes = [
  {
    path: '',
    component: LogisticsComponent,
    children: [
      {
        path: 'hojas-de-demanda',
        loadChildren: () => import('./pages/demand-sheets/demand-sheets.module').then(d => d.DemandSheetsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogisticsRoutingModule { }
