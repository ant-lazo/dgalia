import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportsComponent } from './reports.component';

const routes: Routes = [
    {
      path: '',
      component: ReportsComponent,
      children: [
        {
            path: 'ranking',
            loadChildren: () => import('./pages/ranking-product/ranking-product.module').then(r => r.RankingProductModule)
        },
        {
            path: 'kardex',
            loadChildren: () => import('./pages/kardex/kardex.module').then(k => k.KardexModule)
        },
        {
            path: 'valoration',
            loadChildren: () => import('./pages/valoration/valoration.module').then(v => v.ValorationModule)
        },
        {
            path: '', pathMatch: 'full', redirectTo: 'ranking'
        }
    ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ReportsRoutingModule { }