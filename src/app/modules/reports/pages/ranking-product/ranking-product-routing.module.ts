import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RankingProductComponent } from './ranking-product.component';

const routes: Routes = [
  {
    path: '',
    component: RankingProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingProductRoutingModule { }