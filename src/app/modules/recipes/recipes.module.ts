import { NgModule } from '@angular/core';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { SharedModule } from 'app/shared/shared.module';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderModule } from 'app/shared/header/header.module';
import { FormsMaterialModule } from 'app/shared/modules/forms-material.module';
import { MaterialTableModule } from 'app/shared/modules/table-modules.module';
import { MaterialBasicUitModule } from 'app/shared/modules/ui-modules.module';
import { RowButtonsModule } from 'app/shared/row-buttons/row-buttons.module';
import { SearchBoxModule } from 'app/shared/search-box/search-box.module';
import { SoupplyRoutingModule } from '../supply/soupply-routing.module';
import { RecipeListTableComponent } from './components/recipe-list-table/recipe-list-table.component';
import { RegisterRecipeComponent } from './pages/register-recipe/register-recipe.component';
import { EditRecipeComponent } from './pages/edit-recipe/edit-recipe.component';
import { DetailRecipeComponent } from './pages/detail-recipe/detail-recipe.component';
import { RecipeFormComponent } from './components/register-form/register-form.component';
import { RecipeSupplyListComponent } from './components/recipe-supply-list/recipe-supply-list.component';
import { RecipeSupplyModalComponent } from './components/recipe-supply-modal/recipe-supply-modal.component';
import { EditRecipeFormComponent } from './components/edit-form/edit-form.component';
import { DetailRecipeFormComponent } from './components/detail-form/detail-form.component';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeListTableComponent,
    RegisterRecipeComponent,
    EditRecipeComponent,
    DetailRecipeComponent,
    RecipeFormComponent,
    EditRecipeFormComponent,
    DetailRecipeFormComponent,
    RecipeSupplyListComponent,
    RecipeSupplyModalComponent,
  ],
  imports: [
    RecipesRoutingModule,
    SharedModule,
    MaterialTableModule,
    SoupplyRoutingModule,
    HeaderModule,
    RowButtonsModule,
    MaterialBasicUitModule,
    MatDialogModule,
    FormsMaterialModule,
    SearchBoxModule
  ]
})
export class RecipesModule { }
