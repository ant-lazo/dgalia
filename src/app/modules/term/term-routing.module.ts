import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTermComponent } from './pages/list-term/list-term.component';
import { TermComponent } from './term.component';

const routes: Routes = [{
  path: '',
  component: TermComponent,
  children: [
    { path: 'listado', component: ListTermComponent },
    { path: '', pathMatch: 'full', redirectTo: 'listado' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermRoutingModule { }
