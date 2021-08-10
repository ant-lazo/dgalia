import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubRecipesComponent } from './sub-recipes.component';
import { SubRecipeListComponent } from './pages/sub-recipe-list/sub-recipe-list.component';
import { RegisterSubRecipeComponent } from './pages/register-sub-recipe/register-sub-recipe.component';
import { EditSubRecipeComponent } from './pages/edit-sub-recipe/edit-sub-recipe.component';
import { DetailSubRecipeComponent } from './pages/detail-sub-recipe/detail-sub-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: SubRecipesComponent,
    children: [
      { path: 'listado', component: SubRecipeListComponent },
      { path: 'registro', component: RegisterSubRecipeComponent },
      { path: 'editar/:id', component: EditSubRecipeComponent },
      { path: 'detalle/:id', component: DetailSubRecipeComponent },
      { path: '', pathMatch: 'full', redirectTo: 'listado' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubRecipesRoutingModule { }
