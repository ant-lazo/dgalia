import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportInventoryComponent } from './report-inventory.component';

const routes: Routes = [
  {
    path: '',
    component: ReportInventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportInventoryRoutingModule { }