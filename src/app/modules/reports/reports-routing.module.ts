import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ReportsComponent } from "./reports.component";

const routes: Routes = [
  {
    path: "",
    component: ReportsComponent,
    children: [
      {
        path: "ranking",
        loadChildren: () =>
          import("./pages/ranking-product/ranking-product.module").then(
            (r) => r.RankingProductModule
          ),
      },
      {
        path: "kardex",
        loadChildren: () =>
          import("./pages/kardex/kardex.module").then((k) => k.KardexModule),
      },
      {
        path: "pending-payment",
        loadChildren: () =>
          import("./pages/pending-payment/pending-payment.module").then(
            (p) => p.PendingPaymentModule
          ),
      },
      {
        path: "recipe",
        loadChildren: () =>
          import("./pages/recipe/recipe.module").then((k) => k.RecipeModule),
      },
      {
        path: "valoration",
        loadChildren: () =>
          import("./pages/valoration/valoration.module").then(
            (v) => v.ValorationModule
          ),
      },
      // {
      //     path: 'programation',
      //     loadChildren: () => import('./pages/programation/programation.module').then(p => p.ProgramationModule)
      // },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "ranking",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
