import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReciperService } from '../../services/reciper.service';
import { EditRecipeForm } from '../../models/edit-recipe-form.model';
import { ToastrService } from 'ngx-toastr';
import { RecipeFormHelper } from '../../helpers/recipe-form.helper';
import { RowAppButtonModel } from 'app/shared/row-buttons/models/row-nutton.model';
import { RecipeRegisterFomService } from '../../services/recipe-register-fom.service';
import { RecipeSelectedSupply } from '../../models/recipe-selected-supply';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {

  public recipe: Recipe;
  private id: number;
  private helper: RecipeFormHelper;
  public rowButtons: RowAppButtonModel[];
  public addsuppliyEvent: boolean;

  constructor(
    public _recipe: ReciperService,
    private _toast: ToastrService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _formService: RecipeRegisterFomService
  ) {
    this.id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.helper = new RecipeFormHelper();
    this.rowButtons = this.helper.buttonsRowToUpdate;
  }

  ngOnInit(): void {
    this._recipe.findById(this.id).subscribe(recipe => {
      this.recipe = recipe;
    });
  }

  public setOptionSelected(option: string): void {
    switch (option) {
      case 'addsupply':
        this.addsuppliyEvent = !this.addsuppliyEvent;
        break;
      case 'updateRecipe':
        this.validateRecipedata();
        break;
      default:
        break;
    }
  }

  public validateRecipedata(): void {
    if (!this._formService.updateForm)  {
      this._toast.error('Por favor verifique que los campos esten correctos', 'Formulario no valido')
      return;
    }

    if (!this._formService.supplies || this._formService.supplies.length == 0) {
      this._toast.error('Debe seleccionar como minimo un insumo', 'Receta vacia');
      return;
    }

    this.editRecipe(this._formService.updateForm, this._formService.supplies );
  }

  public editRecipe(form: EditRecipeForm, supplies: RecipeSelectedSupply[]) {
     form.detail = supplies.map(e => { return { supplyId: e.id, measuredUnitId: e.measuredUnitId, quantity: e.quantity } })
      this._recipe.editRecipe(form).subscribe(result => {
        this._toast.success(result.message, 'Actualizado exitoso');
        this._router.navigate(['recetas/listado']);
      });
  }

}
