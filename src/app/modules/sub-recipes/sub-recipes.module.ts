import { NgModule } from '@angular/core';

import { SubRecipesRoutingModule } from './sub-recipes-routing.module';
import { SubRecipesComponent } from './sub-recipes.component';
import { SharedModule } from 'app/shared/shared.module';
import { SubRecipeListComponent } from './pages/sub-recipe-list/sub-recipe-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderModule } from 'app/shared/header/header.module';
import { FormsMaterialModule } from 'app/shared/modules/forms-material.module';
import { MaterialTableModule } from 'app/shared/modules/table-modules.module';
import { MaterialBasicUitModule } from 'app/shared/modules/ui-modules.module';
import { RowButtonsModule } from 'app/shared/row-buttons/row-buttons.module';
import { SearchBoxModule } from 'app/shared/search-box/search-box.module';
import { SoupplyRoutingModule } from '../supply/soupply-routing.module';
import { SubRecipeListTableComponent } from './components/sub-recipe-list-table/sub-recipe-list-table.component';
import { RegisterSubRecipeComponent } from './pages/register-sub-recipe/register-sub-recipe.component';
import { EditSubRecipeComponent } from './pages/edit-sub-recipe/edit-sub-recipe.component';
import { DetailSubRecipeComponent } from './pages/detail-sub-recipe/detail-sub-recipe.component';
import { SubRecipeFormComponent } from './components/register-form/register-form.component';
import { SubRecipeSupplyListComponent } from './components/sub-recipe-supply-list/sub-recipe-supply-list.component';
import { SubRecipeSupplyModalComponent } from './components/sub-recipe-supply-modal/sub-recipe-supply-modal.component';
import { EditSubRecipeFormComponent } from './components/edit-form/edit-form.component';
import { DetailSubRecipeFormComponent } from './components/detail-form/detail-form.component';
import { LoadingBodyModule } from '../../shared/loading-body/loading-body.module';


@NgModule({
  declarations: [
    SubRecipesComponent,
    SubRecipeListTableComponent,
    SubRecipeListComponent,
    DetailSubRecipeFormComponent,
    EditSubRecipeFormComponent,
    SubRecipeSupplyListComponent,
    SubRecipeSupplyModalComponent,
    SubRecipeFormComponent,
    DetailSubRecipeComponent,
    EditSubRecipeComponent,
    RegisterSubRecipeComponent
  ],
  imports: [
    SubRecipesRoutingModule,
    SharedModule,
    MaterialTableModule,
    SoupplyRoutingModule,
    HeaderModule,
    RowButtonsModule,
    MaterialBasicUitModule,
    MatDialogModule,
    FormsMaterialModule,
    SearchBoxModule,
    LoadingBodyModule
  ]
})
export class SubRecipesModule { }
