import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Headquarter } from '../../../headquarter/models/headquarter.model';
import { Course } from '../../../course/models/course.interface';
import { Term } from '../../../term/models/term.interface';
import { CoursesService } from '../../../course/services/courses.service';
import { HeadquartesService } from '../../../headquarter/services/headquartes.service';
import { TermsService } from '../../../term/services/terms.service';
import { SubRecipeRegisterFomService } from '../../services/sub-recipe-register-fom.service';
import { SubReciperService } from '../../services/sub-reciper.service';

@Component({
  selector: 'sub-recipe-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class SubRecipeFormComponent implements OnInit {

  public subRecipeForm: FormGroup;
  public courseList: Observable<Course[]>;
  public headquarterList: Observable<Headquarter[]>;
  public termList: Observable<Term[]>;

  constructor(
    public _course: CoursesService,
    private _headquarter: HeadquartesService,
    private _term: TermsService,
    private _formBuilder: FormBuilder,
    private _formService: SubRecipeRegisterFomService,
    private _subRecipes: SubReciperService
  ) {
    this.setForm();
  }

  ngOnInit(): void {
    this.courseList = this._course.getCourseList();
    this.headquarterList = this._headquarter.getCompleteList();
    this.termList = this._term.getCompleteList();
    this.generateCode();
    this.listenFormChanges();
  }

  public listenFormChanges(): void {
    this.subRecipeForm.valueChanges.subscribe(form => {
      this._formService.registerForm = this.subRecipeForm.valid ? form : null;
    });
  }

  private generateCode(): void {
    this._subRecipes.generateCode().subscribe((code: string) => {
      this.subRecipeForm.controls.code.setValue(code);
    })
  }

  private setForm() {
    this.subRecipeForm = this._formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      code: [null, Validators.required],
      price: [null, Validators.required],
      cost: [null, Validators.required],
      headquarter_id: [null],
      course_id: [null],
      term_id: [null],
      detail: [null]
    });
  }

}
