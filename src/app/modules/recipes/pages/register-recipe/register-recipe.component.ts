import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../../../course/services/courses.service';
import { Observable } from 'rxjs';
import { Course } from 'app/modules/course/models/course.interface';
import { Headquarter } from '../../../headquarter/models/headquarter.model';
import { HeadquartesService } from '../../../headquarter/services/headquartes.service';
import { Term } from '../../../term/models/term.interface';
import { TermsService } from '../../../term/services/terms.service';
import { Supply } from '../../../supply/models/supply';
import { RegisterRecipeForm } from '../../models/register-recipe-form.model';
import { ReciperService } from '../../services/reciper.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-recipe',
  templateUrl: './register-recipe.component.html',
  styleUrls: ['./register-recipe.component.scss']
})
export class RegisterRecipeComponent implements OnInit {

  public courseList: Observable<Course[]>;
  public headquarterList: Observable<Headquarter[]>;
  public termList: Observable<Term[]>;
  public getComponentsData: boolean;

  public suppliesSelectedList: any[];
  public registerRecipeForm: RegisterRecipeForm;
  public dataCompleted: boolean;

  constructor(
    public _course: CoursesService,
    private _headquarter: HeadquartesService,
    private _term: TermsService,
    private _recipe: ReciperService,
    private _toast: ToastrService,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this.courseList = this._course.getCourseList();
    this.headquarterList = this._headquarter.getCompleteList();
    this.termList = this._term.getCompleteList();
  }

  public compleData() {
    this.getComponentsData = !this.getComponentsData;
  }

  public setCompleteData(list: Supply[], form: RegisterRecipeForm): void {
    if (list && list.length > 0) this.suppliesSelectedList = list;
    if (form) this.registerRecipeForm = form;

    if (this.registerRecipeForm && this.suppliesSelectedList) {
      this.dataCompleted = !this.dataCompleted;
      this.registerRecipe();
    }
  }


  public registerRecipe() {
    if (this.dataCompleted) {
      this.registerRecipeForm.detail = this.suppliesSelectedList.map(e => { return { supplyId: e.id, measuredUnitId: e.measuredUnit.id, quantity: e.cantidad } })
      this._recipe.save(this.registerRecipeForm).subscribe(result => {
        this._toast.success(result.message, 'Registro exitoso');
        this._router.navigate(['recetas/listado']);
      });
    }
  }


}
