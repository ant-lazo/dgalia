import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookingSchedulesComponent } from './cooking-schedules.component';

const routes: Routes = [
  {
    path: '',
    component: CookingSchedulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookingSchedulesRoutingModule { }
