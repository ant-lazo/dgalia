import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseOrderComponent } from './purchase-order.component';

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
        path: 'registro/:demandSheetCode',
        loadChildren: () => import('./pages/register/register.module').then(r => r.RegisterModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOrderRoutingModule { }
