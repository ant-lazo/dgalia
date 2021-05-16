import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseComponent } from './warehouse.component';

const routes: Routes = [
  {
    path: '',
    component: WarehouseComponent,
    children: [
      {
        path: 'listado',
        loadChildren: () => import('./pages/list/list.module').then(l => l.ListModule)
      },
      {
        path: 'registro',
        loadChildren: () => import('./pages/registro/registro.module').then(r => r.RegistroModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
