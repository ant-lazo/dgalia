import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Term } from '../../../term/models/term.interface';
import { Headquarter } from '../../../headquarter/models/headquarter.model';
import { Course } from '../../../course/models/course.interface';
import { Recipe } from '../../models/recipe.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'edit-recipe-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditRecipeFormComponent implements OnChanges {

  @Input() termList: Term[];
  @Input() headquarterList: Headquarter[];
  @Input() courseList: Course[];
  @Input() recipe: Observable<Recipe>;

  public recipeForm: FormGroup;

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
      this.recipeForm = this._formBuilder.group({
        name: [recipe.name, Validators.required],
        description: [recipe.description, Validators.required],
        code: [recipe.code, Validators.required],
        price: [recipe.price, Validators.required],
        cost: [recipe.cost, Validators.required],
        headqurater_id: [recipe.headquarter.id, Validators.required],
        course_id: [recipe.course.id, Validators.required],
        term_id: [recipe.term.id, Validators.required],
      });
    }
    else {
      this.recipeForm = this._formBuilder.group({
        name: [null, Validators.required],
        description: [null, Validators.required],
        code: [null, Validators.required],
        price: [null, Validators.required],
        cost: [null, Validators.required],
        headqurater_id: [null, Validators.required],
        course_id: [null, Validators.required],
        term_id: [null, Validators.required],
      });
    }

  }

}
