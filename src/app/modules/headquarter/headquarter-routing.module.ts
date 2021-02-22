import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadquarterComponent } from './headquarter.component';
import { ListHeadquarterComponent } from './pages/list-headquarter/list-headquarter.component';

const routes: Routes = [{
  path: '',
  component: HeadquarterComponent,
  children: [
    { path: 'listado', component: ListHeadquarterComponent },
    { path: '', pathMatch: 'full', redirectTo: 'listado' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadquarterRoutingModule { }
