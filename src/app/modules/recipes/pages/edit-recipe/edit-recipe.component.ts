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
import { MatDialog } from '@angular/material/dialog';
import { RecipeSupplyModalComponent } from '../../components/recipe-supply-modal/recipe-supply-modal.component';
import { RecipeSelectedSupplyMapper } from '../../mappers/recipe-selected-supply.mapper';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {

  public requestData: Observable<Recipe>;
  public recipe: Recipe;
  private helper: RecipeFormHelper;
  public rowButtons: RowAppButtonModel[];
  public suppliesSelected: RecipeSelectedSupply[] = [];
  private recipeSelectedSupplyMapper: RecipeSelectedSupplyMapper;

  constructor(
    public _recipe: ReciperService,
    private _toast: ToastrService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _formService: RecipeRegisterFomService,
    private _matDialog: MatDialog
  ) {
    this.helper = new RecipeFormHelper();
    this.recipeSelectedSupplyMapper = new RecipeSelectedSupplyMapper();
    this.rowButtons = this.helper.buttonsRowToUpdate;
  }

  ngOnInit(): void {
    this.setRecipe();
  }

  public get id(): number {
    return Number(this._activatedRoute.snapshot.paramMap.get('id'));
  }

  public setRecipe(): void {
    this.requestData = this._recipe.findById(this.id).pipe(map((recipe: Recipe) => {
      this.recipe = recipe;
      this.setRecipeSuplies();
      return recipe;
    }));
  }

  private setRecipeSuplies(): void {
    this.suppliesSelected = this.recipeSelectedSupplyMapper.getFromRecipedetail(this.recipe.detail);
  }

  public setOptionSelected(option: string): void {
    if (option === 'addsupply') {
      this.openAddSupplyModal();
      return;
    }

    if (option === 'updateRecipe') {
      this.validateRecipedata();
      return;
    }
  }

  public openAddSupplyModal(): void {
    const dialogRef = this._matDialog.open(RecipeSupplyModalComponent, {
      width: '850px',
      height: '650px'
    });

    dialogRef.afterClosed().subscribe((list: RecipeSelectedSupply[]) => {
      if (list && list.length > 0) this.validateNewItems(list)
    });
  }

  private validateNewItems(list: RecipeSelectedSupply[]): void {
    const newList: RecipeSelectedSupply[] = [];
    newList.push(...this.suppliesSelected);
    for (const item of list) {
      const founded = newList.find(e => e.id == item.id);
      if (!founded) newList.push(item);
    }
    this.suppliesSelected = newList;
  }

  public validateRecipedata(): void {
    if (!this._formService.updateForm) {
      this._toast.error('Por favor verifique que los campos esten correctos', 'Formulario no valido')
      return;
    }

    if (!this._formService.supplies || this._formService.supplies.length == 0) {
      this._toast.error('Debe seleccionar como minimo un insumo', 'Receta vacia');
      return;
    }

    this.editRecipe(this._formService.updateForm, this._formService.supplies);
  }

  public editRecipe(form: EditRecipeForm, supplies: RecipeSelectedSupply[]) {
    form.detail = supplies.map(e => { return { supplyId: e.id, measuredUnitId: e.measuredUnitId, quantity: e.quantity } })
    this._recipe.editRecipe(form).subscribe(result => {
      this._toast.success(result.message, 'Actualizado exitoso');
      this._router.navigate(['recetas/listado']);
    });
  }

}
