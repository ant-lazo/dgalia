import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgramationComponent } from './programation.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramationRoutingModule { }