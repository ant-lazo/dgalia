import { Component, Input, OnChanges } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'detail-recipe-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailRecipeFormComponent implements OnChanges {

  @Input() recipe: Recipe;

  constructor(
  ) { }

  ngOnChanges(): void {
  }
}
