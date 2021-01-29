import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Term } from '../../../term/models/term.interface';
import { Headquarter } from '../../../headquarter/models/headquarter.model';
import { Course } from '../../../course/models/course.interface';

@Component({
  selector: 'recipe-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  @Input() termList: Term[];
  @Input() headquarterList: Headquarter[];
  @Input() courseList: Course[];

  public recipeForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.setForm();
  }



  ngOnInit(): void {
  }


  private setForm() {
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
