import { Component, OnInit } from "@angular/core";
import { RegisterRecipeForm } from "../../models/register-recipe-form.model";
import { ReciperService } from "../../services/reciper.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { RecipeFormHelper } from "../../helpers/recipe-form.helper";
import { RowAppButtonModel } from "app/shared/row-buttons/models/row-nutton.model";
import { RecipeRegisterFomService } from "../../services/recipe-register-fom.service";
import { RecipeSelectedSupply } from "../../models/recipe-selected-supply";
import { RecipeSupplyModalComponent } from "../../components/recipe-supply-modal/recipe-supply-modal.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-register-recipe",
  templateUrl: "./register-recipe.component.html",
  styleUrls: ["./register-recipe.component.scss"],
})
export class RegisterRecipeComponent implements OnInit {
  public helper: RecipeFormHelper;
  public rowButtons: RowAppButtonModel[];
  public suppliesSelected: RecipeSelectedSupply[] = [];

  constructor(
    private _recipe: ReciperService,
    private _toast: ToastrService,
    private _router: Router,
    private _formService: RecipeRegisterFomService,
    private _matDialog: MatDialog
  ) {
    this.helper = new RecipeFormHelper();
    this.rowButtons = this.helper.buttonsRowToRegister;
  }

  ngOnInit(): void {}

  public setOptionSelected(option: string): void {
    switch (option) {
      case "addsupply":
        this.openAddSupplyModal();
        break;
      case "createRecipe":
        this.validateRecipedata();
        break;
      default:
        break;
    }
  }

  public openAddSupplyModal(): void {
    const dialogRef = this._matDialog.open(RecipeSupplyModalComponent, {
      width: "950px",
      height: "650px",
    });

    dialogRef.afterClosed().subscribe((list: RecipeSelectedSupply[]) => {
      if (list && list.length > 0) this.validateNewItems(list);
    });
  }

  private validateNewItems(list: RecipeSelectedSupply[]): void {
    const newList: RecipeSelectedSupply[] = [];
    newList.push(...this.suppliesSelected);
    for (const item of list) {
      const founded = newList.find((e) => e.id == item.id);
      if (!founded) newList.push(item);
    }
    this.suppliesSelected = newList;
  }

  public validateRecipedata(): void {
    if (!this._formService.registerForm) {
      this._toast.error(
        "Por favor verifique que los campos esten correctos",
        "Formulario no valido"
      );
      return;
    }

    if (!this._formService.supplies || this._formService.supplies.length == 0) {
      this._toast.error(
        "Debe seleccionar como mínimo un insumo",
        "Receta vacía"
      );
      return;
    }

    this.registerRecipe(
      this._formService.registerForm,
      this._formService.supplies
    );
  }

  public registerRecipe(
    form: RegisterRecipeForm,
    supplies: RecipeSelectedSupply[]
  ) {
    form.detail = supplies.map((e) => {
      return {
        supplyId: e.id,
        measuredUnitId: e.measuredUnitId,
        quantity: e.quantity,
      };
    });
    this._recipe.save(form).subscribe((result) => {
      this._toast.success(result.message, "Registro exitoso");
      this._router.navigate(["recetas/listado"]);
    });
  }
}
