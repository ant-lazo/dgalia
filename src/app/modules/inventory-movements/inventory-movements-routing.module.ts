import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryMovementsComponent } from './inventory-movements.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryMovementsComponent,
    children: [
      {
        path: 'salidas',
        loadChildren: () => import('./pages/outputs/outputs.module').then(o => o.OutputsModule)
      },
      {
        path: 'entradas',
        loadChildren: () => import('./pages/inputs/inputs.module').then(i => i.InputsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryMovementsRoutingModule { }
