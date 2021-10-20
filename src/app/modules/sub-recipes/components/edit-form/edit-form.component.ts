import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from 'app/modules/recipes/models/recipe.model';
import { Observable, combineLatest } from 'rxjs';
import { Term } from '../../../term/models/term.interface';
import { Headquarter } from '../../../headquarter/models/headquarter.model';
import { Course } from '../../../course/models/course.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TermsService } from '../../../term/services/terms.service';
import { HeadquartesService } from '../../../headquarter/services/headquartes.service';
import { CoursesService } from '../../../course/services/courses.service';
import { SubRecipeRegisterFomService } from '../../services/sub-recipe-register-fom.service';
import { SubRecipe } from '../../models/sub-recipe.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'edit-sub-recipe-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditSubRecipeFormComponent implements OnInit, OnDestroy {

  @Input() subRecipe: SubRecipe;

  public requestData: Observable<any>;
  public termList: Term[];
  public headquarterList: Headquarter[];
  public courseList: Course[];
  public subRecipeForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _terms: TermsService,
    private _headquarter: HeadquartesService,
    public _course: CoursesService,
    private _formService: SubRecipeRegisterFomService
  ) { }

  ngOnInit(): void {
    this.setForm(this.subRecipe);
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
    this._formService.updateForm = this.subRecipeForm.value;
    this.subRecipeForm.valueChanges.subscribe(form => {
      this._formService.updateForm = this.subRecipeForm.valid ? form : null;
    });
  }

  private setForm(recipe: Recipe) {
    this.subRecipeForm = this._formBuilder.group({
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
