import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'listado',
        loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule)
      },
      {
        path: 'detalle/:code',
        loadChildren: () => import('./pages/detail/detail.module').then(d => d.DetailModule)
      },
      {
        path: 'registro',
        loadChildren: () => import('./pages/register/register.module').then(r => r.RegisterModule)
      },
      {
        path: 'actualizar/:code',
        loadChildren: () => import('./pages/update/update.module').then(u => u.UpdateModule)
      },
      {
        path: '', pathMatch: 'full', redirectTo: 'listado'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
