import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../course/services/courses.service';
import { Observable } from 'rxjs';
import { Course } from 'app/modules/course/models/course.interface';
import { Headquarter } from '../../../headquarter/models/headquarter.model';
import { HeadquartesService } from '../../../headquarter/services/headquartes.service';
import { Term } from '../../../term/models/term.interface';
import { TermsService } from '../../../term/services/terms.service';
import { RegisterRecipeForm } from '../../models/register-recipe-form.model';
import { ReciperService } from '../../services/reciper.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RecipeFormHelper } from '../../helpers/recipe-form.helper';
import { RowAppButtonModel } from 'app/shared/row-buttons/models/row-nutton.model';
import { RecipeRegisterFomService } from '../../services/recipe-register-fom.service';
import { RecipeSelectedSupply } from '../../models/recipe-selected-supply';

@Component({
  selector: 'app-register-recipe',
  templateUrl: './register-recipe.component.html',
  styleUrls: ['./register-recipe.component.scss']
})
export class RegisterRecipeComponent implements OnInit {

  public helper: RecipeFormHelper;
  public courseList: Observable<Course[]>;
  public headquarterList: Observable<Headquarter[]>;
  public termList: Observable<Term[]>;

  public addsuppliyEvent: boolean;
  public rowButtons: RowAppButtonModel[];


  constructor(

    private _recipe: ReciperService,
    private _toast: ToastrService,
    private _router: Router,
    private _formService: RecipeRegisterFomService
  ) {
    this.helper = new RecipeFormHelper();
    this.rowButtons = this.helper.buttonsRowToRegister;
  }

  ngOnInit(): void {  }

  public setOptionSelected(option: string): void {
    switch (option) {
      case 'addsupply':
        this.addsuppliyEvent = !this.addsuppliyEvent;
        break;
      case 'createRecipe':
        this.validateRecipedata();
        break;
      default:
        break;
    }
  }

  public validateRecipedata(): void {
    if (!this._formService.registerForm)  {
      this._toast.error('Por favor verifique que los campos esten correctos', 'Formulario no valido')
      return;
    }

    if (!this._formService.supplies || this._formService.supplies.length == 0) {
      this._toast.error('Debe seleccionar como minimo un insumo', 'Receta vacia');
      return;
    }

    this.registerRecipe(this._formService.registerForm, this._formService.supplies );
  }


  public registerRecipe(form: RegisterRecipeForm, supplies: RecipeSelectedSupply[]) {
    form.detail = supplies.map(e => { return { supplyId: e.id, measuredUnitId: e.measuredUnitId, quantity: e.quantity } })
      this._recipe.save(form).subscribe(result => {
        this._toast.success(result.message, 'Registro exitoso');
        this._router.navigate(['recetas/listado']);
      });
  }
}
