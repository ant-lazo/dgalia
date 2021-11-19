import { Component, OnInit } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import moment from 'moment';
import { Observable } from 'rxjs';
import { FilterRecipe } from './models/filter-recipe';
import { RecipeFormModel } from './models/register-form';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: []
})
export class RecipeComponent implements OnInit {

  public request: Observable<FilterRecipe[]>;
  public form: RecipeFormModel;
  recipefilter : FilterRecipe[] = [];

  constructor(
    private _recipe: RecipeService)
    { }

  ngOnInit(): void {
    this.setDefaultData();
  }

  public listenFormChanges(form: RecipeFormModel): void {
    this.form = form;
  }

  public onShowMethod(): void {
    this.setRecipe();
    console.log("FilterRecipe", this.recipefilter)
  }

  public onDownloadMethod(): void {
    location.href = ApiRoutes.reports.getRecipeDownload(this.form.headquarterId);
  }

  public setRecipe(): void{
    this.request = this._recipe.show(this.form.headquarterId);
    this.request.subscribe(k => {
      this.recipefilter = k;
    });
  }

  private setDefaultData(): void {
    this.request = this._recipe.show(0);
    this.request.subscribe(k => {
      this.recipefilter = k;
    });
  }

}
