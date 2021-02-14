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
import { ActivatedRoute, Router } from '@angular/router';
import { ReciperService } from '../../services/reciper.service';
import { element } from 'protractor';
import { EditRecipeForm } from '../../models/edit-recipe-form.model';
import { Supply } from 'app/modules/supply/models/supply';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {

  public courseList: Observable<Course[]>;
  public headquarterList: Observable<Headquarter[]>;
  public termList: Observable<Term[]>;
  public recipe:Observable<Recipe>;
  private id:number;
  public getComponentsData: boolean;

  public suppliesSelectedList: any[];
  public editRecipeForm: EditRecipeForm;
  public dataCompleted: boolean;

  constructor(
    public _recipe: ReciperService,
    public _course: CoursesService,
    private _headquarter: HeadquartesService,
    private _term: TermsService,
    private _toast: ToastrService,
    private _router: Router,
    route: ActivatedRoute
  ) {
    this.id = Number(route.snapshot.paramMap.get('id'));
  }

  // logica del mapper
  // logica de envio a servidor

  ngOnInit(): void {
    this.recipe = this._recipe.findById(this.id);
    this.courseList = this._course.getCourseList();
    this.headquarterList = this._headquarter.getCompleteList();
    this.termList = this._term.getCompleteList();
  }

  public compleData() {
    this.getComponentsData = !this.getComponentsData;
  }

  public setCompleteData(list: Supply[], form: EditRecipeForm): void {
    console.log("🚀 ~ file: edit-recipe.component.ts ~ line 64 ~ EditRecipeComponent ~ setCompleteData ~ list", list)
    if (list && list.length > 0) this.suppliesSelectedList = list;
    if (form) {
      this.editRecipeForm = form;
      console.log("🚀 ~ file: edit-recipe.component.ts ~ line 67 ~ EditRecipeComponent ~ setCompleteData ~ form", form)
      this.editRecipeForm.id = this.id;
    } 

    if (this.editRecipeForm && this.suppliesSelectedList) {
      this.dataCompleted = !this.dataCompleted;
      this.editRecipe();
    }
  }


  public editRecipe() {
    if (this.dataCompleted) {
      this.editRecipeForm.detail = this.suppliesSelectedList.map(e => { return { supplyId: e.id, measuredUnitId: e.measuredUnit.id, quantity: e.quantity } })
      this._recipe.editRecipe(this.editRecipeForm).subscribe(result => {
        this._toast.success(result.message, 'Actualizado exitoso');
        this._router.navigate(['recetas/listado']);
      });
    }
  }

}
