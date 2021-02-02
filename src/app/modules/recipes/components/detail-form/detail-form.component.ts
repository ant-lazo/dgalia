import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Term } from '../../../term/models/term.interface';
import { Headquarter } from '../../../headquarter/models/headquarter.model';
import { Course } from '../../../course/models/course.interface';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'detail-recipe-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailRecipeFormComponent implements OnInit {

  @Input() termList: Term[];
  @Input() headquarterList: Headquarter[];
  @Input() courseList: Course[];
  @Input() recipe:Recipe;

  public recipeForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.setForm();
  }



  ngOnInit(): void {
  }


  private setForm() {
    console.log("🚀 ~ file: detail-form.component.ts ~ line 45 ~ DetailRecipeFormComponent ~ setForm ~ this.recipe", this.recipe)
    // this.recipeForm = this._formBuilder.group({
    //   name: [this.recipe.name, Validators.required],
    //   description: [this.recipe.description, Validators.required],
    //   code: [this.recipe.code, Validators.required],
    //   price: [this.recipe.price, Validators.required],
    //   cost: [this.recipe.cost, Validators.required],
    //   headqurater_id: [this.recipe.headquarter.id, Validators.required],
    //   course_id: [this.recipe.course.id, Validators.required],
    //   term_id: [this.recipe.term.id, Validators.required],
    // });
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
