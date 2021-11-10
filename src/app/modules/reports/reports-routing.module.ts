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