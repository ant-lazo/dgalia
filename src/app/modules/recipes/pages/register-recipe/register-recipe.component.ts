import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../../../course/services/courses.service';
import { Observable } from 'rxjs';
import { Course } from 'app/modules/course/models/course.interface';
import { Headquarter } from '../../../headquarter/models/headquarter.model';
import { HeadquartesService } from '../../../headquarter/services/headquartes.service';
import { Term } from '../../../term/models/term.interface';
import { TermsService } from '../../../term/services/terms.service';

@Component({
  selector: 'app-register-recipe',
  templateUrl: './register-recipe.component.html',
  styleUrls: ['./register-recipe.component.scss']
})
export class RegisterRecipeComponent implements OnInit {

  public courseList: Observable<Course[]>;
  public headquarterList: Observable<Headquarter[]>;
  public termList: Observable<Term[]>;

  constructor(
    public _course: CoursesService,
    private _headquarter: HeadquartesService,
    private _term: TermsService
  ) {
  }

  // logica del mapper
  // logica de envio a servidor

  ngOnInit(): void {
    this.courseList = this._course.getCourseList();
    this.headquarterList = this._headquarter.getCompleteList();
    this.termList = this._term.getCompleteList();
  }


}
