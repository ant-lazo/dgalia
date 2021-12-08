import { Component, OnInit } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import moment from 'moment';
import { Observable } from 'rxjs';
import { ShowFormHelper } from './helpers/show-form-validations.helper';
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
    private _recipe: RecipeService,
    private _helper: ShowFormHelper,
    private _notifications: AppNotificationsService
    ){ }

  ngOnInit(): void {
    this.setDefaultData();
  }

  public listenFormChanges(form: RecipeFormModel): void {
    this.form = form;
  }

  public onShowMethod(): void {
    const error: string = this._helper.validateFormData(this.form);
    if (error != '') {
      this._notifications.error(null, error);
      return;
    }
    this.setRecipe();
    console.log("FilterRecipe", this.recipefilter)
  }

  public onDownloadMethod(): void {
    const error: string = this._helper.validateFormData(this.form);
    if (error != '') {
      this._notifications.error(null, error);
      return;
    }
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
