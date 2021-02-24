import { Component, Input,  OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Term } from '../../../term/models/term.interface';
import { Headquarter } from '../../../headquarter/models/headquarter.model';
import { Course } from '../../../course/models/course.interface';
import { RecipeRegisterFomService } from '../../services/recipe-register-fom.service';
import { CoursesService } from 'app/modules/course/services/courses.service';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { TermsService } from 'app/modules/term/services/terms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'recipe-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  public recipeForm: FormGroup;
  public courseList: Observable<Course[]>;
  public headquarterList: Observable<Headquarter[]>;
  public termList: Observable<Term[]>;

  constructor(
    public _course: CoursesService,
    private _headquarter: HeadquartesService,
    private _term: TermsService,
    private _formBuilder: FormBuilder,
    private _formService: RecipeRegisterFomService
  ) {
    this.setForm();
  }

  ngOnInit(): void {
    this.courseList = this._course.getCourseList();
    this.headquarterList = this._headquarter.getCompleteList();
    this.termList = this._term.getCompleteList();
    this.listenFormChanges();
  }

  public listenFormChanges(): void {
    this.recipeForm.valueChanges.subscribe(form => {
      this._formService.registerForm = this.recipeForm.valid ? form: null;
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
      detail: [null]
    });
  }

}
