import { Component, Input,  OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Term } from '../../../term/models/term.interface';
import { Headquarter } from '../../../headquarter/models/headquarter.model';
import { Course } from '../../../course/models/course.interface';
import { RecipeRegisterFomService } from '../../services/recipe-register-fom.service';

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
    private _formBuilder: FormBuilder,
    private _formService: RecipeRegisterFomService
  ) {
    this.setForm();
  }

  ngOnInit(): void {
    this.listenFormChanges();
  }

  public listenFormChanges(): void {
    this.recipeForm.valueChanges.subscribe(form => {
      if (this.recipeForm.valid) this._formService.registerForm = form;
    });
  }

  private setForm() {
    this.recipeForm = this._formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      code: [null, Validators.required],
      price: [null, Validators.required],
      cost: [null, Validators.required],
      headquarter_id: [null, Validators.required],
      course_id: [null, Validators.required],
      term_id: [null, Validators.required],
    });
  }

}
