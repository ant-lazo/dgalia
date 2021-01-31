import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from '../course/course.component';
import { ListComponent } from '../course/pages/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    children: [
      { path: 'listado', component: ListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
