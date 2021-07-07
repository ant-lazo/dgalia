import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Term } from '../../../term/models/term.interface';
import { Recipe } from '../../models/recipe.model';
import { combineLatest, Observable } from 'rxjs';
import { TermsService } from 'app/modules/term/services/terms.service';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { CoursesService } from 'app/modules/course/services/courses.service';
import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { Course } from 'app/modules/course/models/course.interface';
import { RecipeRegisterFomService } from '../../services/recipe-register-fom.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'edit-recipe-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditRecipeFormComponent implements OnInit, OnDestroy {

  @Input() recipe: Recipe;

  public requestData: Observable<any>;
  public termList: Term[];
  public headquarterList: Headquarter[];
  public courseList: Course[];
  public recipeForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _terms: TermsService,
    private _headquarter: HeadquartesService,
    public _course: CoursesService,
    private _formService: RecipeRegisterFomService
  ) { }

  ngOnInit(): void {
    this.setForm(this.recipe);
    this.listenFormChanges();
    this.setRequestData();
  }

  public setRequestData(): void {
    this.requestData = combineLatest([
      this._terms.getCompleteList(),
      this._course.getCourseList(),
      this._headquarter.getCompleteList(),
    ]).pipe(map((data: any) => {
      this.termList = data[0];
      this.courseList = data[1];
      this.headquarterList = data[2];
      return data;
    }));
  }

  ngOnDestroy(): void {
    this._formService.updateForm = null;
  }

  public listenFormChanges(): void {
    this._formService.updateForm = this.recipeForm.value;
    this.recipeForm.valueChanges.subscribe(form => {
      this._formService.updateForm = this.recipeForm.valid ? form : null;
    });
  }

  private setForm(recipe: Recipe) {
    this.recipeForm = this._formBuilder.group({
      id: [recipe.id],
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
