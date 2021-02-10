import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Term } from '../../../term/models/term.interface';
import { Headquarter } from '../../../headquarter/models/headquarter.model';
import { Course } from '../../../course/models/course.interface';
import { Recipe } from '../../models/recipe.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'detail-recipe-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailRecipeFormComponent implements OnChanges {

  @Input() termList: Term[];
  @Input() headquarterList: Headquarter[];
  @Input() courseList: Course[];
  @Input() recipe: Observable<Recipe>;

  public recipeForm: any;

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.setForm(null);
  }


  ngOnChanges(): void {
    this.recipe.subscribe(element => {
      this.setForm(element);
    });
  }


  private setForm(recipe: Recipe) {
    if (recipe) {
      this.recipeForm = recipe
    }
    else {
      this.recipeForm = null;
    }
  }
}
