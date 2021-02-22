import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeasuredUnitsComponent } from './measured-units.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: MeasuredUnitsComponent,
    children: [
      { path: 'listado', component: ListComponent },
      { path: '', pathMatch: 'full', redirectTo: 'listado' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeasuredUnitsRoutingModule { }
