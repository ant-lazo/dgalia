import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { RegisterRecipeComponent } from './pages/register-recipe/register-recipe.component';
import { EditRecipeComponent } from './pages/edit-recipe/edit-recipe.component';
import { DetailRecipeComponent } from './pages/detail-recipe/detail-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      { path: 'listado', component: RecipeListComponent },
      { path: 'registro', component: RegisterRecipeComponent },
      { path: 'editar/:id', component: EditRecipeComponent },
      { path: 'detalle/:id', component: DetailRecipeComponent },
      { path: '', pathMatch: 'full', redirectTo: 'listado' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
