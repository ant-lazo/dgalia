import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../../../course/services/courses.service';
import { Observable } from 'rxjs';
import { Course } from 'app/modules/course/models/course.interface';
import { Headquarter } from '../../../headquarter/models/headquarter.model';
import { HeadquartesService } from '../../../headquarter/services/headquartes.service';
import { Term } from '../../../term/models/term.interface';
import { TermsService } from '../../../term/services/terms.service';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute } from '@angular/router';
import { ReciperService } from '../../services/reciper.service';
import { element } from 'protractor';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {

  public courseList: Observable<Course[]>;
  public headquarterList: Observable<Headquarter[]>;
  public termList: Observable<Term[]>;
  recipe:Recipe;
  private id:number;

  constructor(
    public _recipe: ReciperService,
    public _course: CoursesService,
    private _headquarter: HeadquartesService,
    private _term: TermsService,
    route: ActivatedRoute
  ) {
    this.id = Number(route.snapshot.paramMap.get('id'));
  }

  // logica del mapper
  // logica de envio a servidor

  ngOnInit(): void {
    this._recipe.findById(this.id).subscribe(element => {
      console.log("🚀 ~ file: edit-recipe.component.ts ~ line 45 ~ EditRecipeComponent ~ this._recipe.findById ~ element", element)
      if(element) this.recipe = element;
    });
    this.courseList = this._course.getCourseList();
    this.headquarterList = this._headquarter.getCompleteList();
    this.termList = this._term.getCompleteList();
  }


}
