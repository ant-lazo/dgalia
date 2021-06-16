import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderComponent } from './provider.component';

const routes: Routes = [
  {
    path: '',
    component: ProviderComponent,
    children: [
      {
        path: 'listado',
        loadChildren: () => import('./pages/list/list.module').then(l => l.ListModule)
      },
      {
        path: 'registro',
        loadChildren: () => import('./pages/register/register.module').then(r => r.RegisterModule)
      },
      {
        path: 'editar/:code',
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
export class ProviderRoutingModule { }
