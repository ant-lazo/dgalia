import { Component, Input, OnChanges } from '@angular/core';

import { Recipe } from '../../models/recipe.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'detail-recipe-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailRecipeFormComponent implements OnChanges {

  @Input() recipe: Observable<Recipe>;
  public recipeForm: any;

  constructor(
  ) {
  }


  ngOnChanges(): void {
    this.recipe.subscribe(element => {
      this.recipeForm = element;
    });
  }



}
