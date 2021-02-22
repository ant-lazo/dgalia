import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../course/services/courses.service';
import { Observable } from 'rxjs';
import { Course } from 'app/modules/course/models/course.interface';
import { Headquarter } from '../../../headquarter/models/headquarter.model';
import { HeadquartesService } from '../../../headquarter/services/headquartes.service';
import { Term } from '../../../term/models/term.interface';
import { TermsService } from '../../../term/services/terms.service';
import { ReciperService } from '../../services/reciper.service';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-recipe',
  templateUrl: './detail-recipe.component.html',
  styleUrls: ['./detail-recipe.component.scss']
})
export class DetailRecipeComponent implements OnInit {

  public courseList: Observable<Course[]>;
  public headquarterList: Observable<Headquarter[]>;
  public termList: Observable<Term[]>;
  public recipe: Observable<Recipe>;
  private id: number;

  constructor(
    public _recipe: ReciperService,
    public _course: CoursesService,
    private _headquarter: HeadquartesService,
    private _term: TermsService,
    route: ActivatedRoute
  ) {
    this.id = Number(route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.courseList = this._course.getCourseList();
    this.headquarterList = this._headquarter.getCompleteList();
    this.termList = this._term.getCompleteList();
    this.recipe = this._recipe.findById(this.id);
  }


}
