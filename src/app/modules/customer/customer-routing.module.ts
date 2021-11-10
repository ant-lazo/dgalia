import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      { path: 'usuarios', component: UsersComponent },
      { path: '', pathMatch: 'full', redirectTo: 'usuarios' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }