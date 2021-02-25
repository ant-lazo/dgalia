import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { SelectRecipesComponent } from 'app/modules/programation/components/select-recipes/select-recipes.component';
import { RegisterPageComponentHelper } from 'app/modules/programation/helpers/register-page.helper';
import { CookingScheduleRecipe } from 'app/modules/programation/models/cooking-schedule-recipe..model';
import { CookingSchedule } from 'app/modules/programation/models/cooking-schedule.model';
import { CookingScheduleFormService } from 'app/modules/programation/services/cooking-schedule-form.service';
import { CookingScheduleService } from 'app/modules/programation/services/cooking-schedule.service';
import { RowAppButtonModel } from 'app/shared/row-buttons/models/row-nutton.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.scss']
})
export class UpdatePageComponent implements OnInit {

  public cookingSchedule: CookingSchedule;
  public recipesSelected: CookingScheduleRecipe[] = [];
  public buttonsList: RowAppButtonModel[] = [];
  public showRecipeTable: boolean;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cookingschedule: CookingScheduleService,
    private _router: Router,
    private _matDialog: MatDialog,
    private _formService: CookingScheduleFormService,
    private _toast: ToastrService
  ) {
    this.buttonsList = RegisterPageComponentHelper.getPageUpdateButtons();
    this.showRecipeTable = true;
  }

  ngOnInit(): void {
    this.setCookingSchedule();
  }

  private get id(): string {
    return this._activatedRoute.snapshot.params.id;
  }

  public applyButtonEvent(action: string): void {
    switch (action) {
      case 'add-recipes':
        this.openSelectRecipesModal();
        break;
      case 'cancel':
        this.goBack();
        break;
      case 'update':
        this.validateDatatuUpdate();
        break;
      default:
        break;
    }
  }

  private openSelectRecipesModal() {
    this.showRecipeTable = false;
    const dialogRef = this._matDialog.open(SelectRecipesComponent, {
      width: '900px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.showRecipeTable = true;
      if (result) this.validateRecipeSelection(result);
    });
  }


  public validateDatatuUpdate(): void {

    if (!this._formService.updateForm) {
      this._toast.error('Valide los datos ingresados', 'datos de formulario no validos');
      return;
    }

    if (this.recipesSelected && this.recipesSelected.length === 0) {
      this._toast.error('Debe ingresar como minumo una receta', 'Recetas no validast');
      return;
    }

    this.saveRecipes();
  }

  public saveRecipes(): void {
    const form = this._formService.updateForm;
    form.recipes = this.recipesSelected.map(e => { return { id: e.id, quantity: e.quantity } });
    this._cookingschedule.update(form).subscribe((resp: JsonResp) => {
      this._toast.success(resp.message, 'Se ha actualizado la programación');
      this.goBack();
    });
  }

  private setCookingschedulerecipes(): void {
    const recipes: any = this.cookingSchedule.recipes;
    this.recipesSelected = recipes;
  }

  private validateRecipeSelection(recipes: CookingScheduleRecipe[]): void {
    const newRecipeList: CookingScheduleRecipe[] = this.recipesSelected;
    this.recipesSelected = [];
    for (const recipe of recipes) {
      const recipeFounded: CookingScheduleRecipe = newRecipeList.find(r => r.id === recipe.id);
      if (recipeFounded) {
        recipeFounded.quantity = recipe.quantity;
      } else {
        newRecipeList.push(recipe);
      }
    }
    this.showRecipeTable = true;
    this.recipesSelected = newRecipeList;
  }

  private setCookingSchedule(): void {
    this._cookingschedule.getById(this.id).subscribe((result: CookingSchedule) => {
      this.cookingSchedule = result;
      this.setCookingschedulerecipes()
    });
  }

  private goBack() {
    this._router.navigate(['programacion/listado']);
  }


}
