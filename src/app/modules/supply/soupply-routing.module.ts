import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplyComponent } from './supply.component';
import { SupplyListComponent } from './pages/supply-list/supply-list.component';

const routes: Routes = [
  {
    path: '',
    component: SupplyComponent,
    children: [
      { path: 'listado', component: SupplyListComponent },
      { path: '', pathMatch: 'full', redirectTo: 'listado' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoupplyRoutingModule { }
