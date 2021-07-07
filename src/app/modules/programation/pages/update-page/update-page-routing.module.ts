import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatePageComponent } from './update-page/update-page.component';

const routes: Routes = [
  {
    path: '',
    component: UpdatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePageRoutingModule { }
