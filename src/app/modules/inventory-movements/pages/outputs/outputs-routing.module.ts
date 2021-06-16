import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutputsComponent } from './outputs.component';

const routes: Routes = [
  {
    path: '',
    component: OutputsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutputsRoutingModule { }
