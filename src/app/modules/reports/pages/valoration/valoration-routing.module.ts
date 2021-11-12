import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ValorationComponent } from './valoration.component';

const routes: Routes = [
  {
    path: '',
    component: ValorationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValorationRoutingModule { }