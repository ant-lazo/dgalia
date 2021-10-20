import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PurchaseOrderComponent } from './purchase-order.component';
import {ListComponent} from '../purchase-order/pages/bills/list/list.component'
import { ListGuidesComponent } from '../purchase-order/pages/guide/list/list.component'
import {DetailBillsComponent} from '../purchase-order/pages/bills/detail-bills/detail-bills.component'

const routes: Routes = [
  {
    path: '',
    component: PurchaseOrderComponent,
    children: [
      {
        path: 'listado',
        loadChildren: () => import('./pages/list/list.module').then(l => l.ListModule)
      },
      {
        path: 'listado-Factura',
        component:ListComponent
      },
      {
        path: 'listado-Guias',
        component:ListGuidesComponent
      },
      {
        path: 'detalle-Factura/:code',
        component:DetailBillsComponent
      },
      {
        path: 'registro/:demandSheetCode',
        loadChildren: () => import('./pages/register/register.module').then(r => r.RegisterModule)
      },
      {
        path: 'detalle/:code',
        loadChildren: () => import('./pages/detail/detail.module').then(d => d.DetailModule)
      },
      {
        path: 'editar/:code',
        loadChildren: () => import('./pages/update/update.module').then(u => u.UpdateModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOrderRoutingModule { }
