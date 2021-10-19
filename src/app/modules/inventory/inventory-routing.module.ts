import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InventoryComponent } from './inventory.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      {
        path: 'productos',
        loadChildren: () => import('./pages/product-list/product-list.module').then(p => p.ProductListModule)
      },
      {
        path: 'kardex/:productCode',
        loadChildren: () => import('./pages/kardex/kardex.module').then(k => k.KardexModule)
      },
      {
        path: 'salidas',
        loadChildren: () => import('./pages/departures/departures.module').then(d => d.DeparturesModule)
      },
      {
        path: '', pathMatch: 'full', redirectTo: 'productos'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
