import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Term } from '../../../term/models/term.interface';
import { Recipe } from '../../models/recipe.model';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { TermsService } from 'app/modules/term/services/terms.service';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { CoursesService } from 'app/modules/course/services/courses.service';
import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { Course } from 'app/modules/course/models/course.interface';

@Component({
  selector: 'edit-recipe-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditRecipeFormComponent implements OnInit, OnDestroy {

  @Input() recipesdas: Recipe;

  public termList: Observable<Term[]>;
  public headquarterList: Observable<Headquarter[]>;
  public courseList: Observable<Course[]>;
  public recipeForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _terms: TermsService,
    private _headquarter: HeadquartesService,
    public _course: CoursesService,
  ) {

  }

  ngOnInit(): void {
    this.setForm(this.recipesdas);
    this.termList = this._terms.getCompleteList();
    this.courseList = this._course.getCourseList();
    this.headquarterList = this._headquarter.getCompleteList();
  }

  ngOnDestroy(): void {
    console.log('some');
    
  }


  private setForm(recipe: Recipe) {
    this.recipeForm = this._formBuilder.group({
      name: [recipe.name, Validators.required],
      description: [recipe.description, Validators.required],
      code: [recipe.code, Validators.required],
      price: [recipe.price, Validators.required],
      cost: [recipe.cost, Validators.required],
      headquarter_id: [recipe.headquarter.id, Validators.required],
      course_id: [recipe.course.id, Validators.required],
      term_id: [recipe.term.id, Validators.required],
    });
  }

}
