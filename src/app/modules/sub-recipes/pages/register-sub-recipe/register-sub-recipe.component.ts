import { Component, OnInit } from '@angular/core';
import { SubRecipeFormHelper } from '../../helpers/sub-recipe-form.helper';
import { RowAppButtonModel } from '../../../../shared/row-buttons/models/row-nutton.model';
import { SubRecipeSelectedSupply } from '../../models/sub-recipe-selected-supply';
import { SubReciperService } from '../../services/sub-reciper.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SubRecipeSupplyModalComponent } from '../../components/sub-recipe-supply-modal/sub-recipe-supply-modal.component';
import { RegisterSubRecipeForm } from '../../models/register-sub-recipe-form.model';
import { SubRecipeRegisterFomService } from '../../services/sub-recipe-register-fom.service';

@Component({
  selector: 'app-register-sub-recipe',
  templateUrl: './register-sub-recipe.component.html',
  styleUrls: ['./register-sub-recipe.component.scss']
})
export class RegisterSubRecipeComponent implements OnInit {

  public helper: SubRecipeFormHelper;
  public rowButtons: RowAppButtonModel[];
  public suppliesSelected: SubRecipeSelectedSupply[] = [];

  constructor(

    private _subRecipe: SubReciperService,
    private _toast: ToastrService,
    private _router: Router,
    private _formService: SubRecipeRegisterFomService,
    private _matDialog: MatDialog
  ) {
    this.helper = new SubRecipeFormHelper();
    this.rowButtons = this.helper.buttonsRowToRegister;
  }

  ngOnInit(): void { }

  public setOptionSelected(option: string): void {
    switch (option) {
      case 'addsupply':
        this.openAddSupplyModal();
        break;
      case 'createSubRecipe':
        this.validateSubRecipedata();
        break;
      default:
        break;
    }
  }

  public openAddSupplyModal(): void {
    const dialogRef = this._matDialog.open(SubRecipeSupplyModalComponent, {
      width: '950px',
      height: '650px'
    });

    dialogRef.afterClosed().subscribe((list: SubRecipeSelectedSupply[]) => {
      if (list && list.length > 0) this.validateNewItems(list)
    });
  }

  private validateNewItems(list: SubRecipeSelectedSupply[]): void {
    const newList: SubRecipeSelectedSupply[] = [];
    newList.push(...this.suppliesSelected);
    for (const item of list) {
      const founded = newList.find(e => e.id == item.id);
      if (!founded) newList.push(item);
    }
    this.suppliesSelected = newList;
  }

  public validateSubRecipedata(): void {
    if (!this._formService.registerForm) {
      this._toast.error('Por favor verifique que los campos esten correctos', 'Formulario no valido')
      return;
    }

    if (!this._formService.supplies || this._formService.supplies.length == 0) {
      this._toast.error('Debe seleccionar como minimo un insumo', 'Sub receta vacia');
      return;
    }

    this.registerRecipe(this._formService.registerForm, this._formService.supplies);
  }


  public registerRecipe(form: RegisterSubRecipeForm, supplies: SubRecipeSelectedSupply[]) {
    form.detail = supplies.map(e => { return { supplyId: e.id, measuredUnitId: e.measuredUnitId, quantity: e.quantity } })
    this._subRecipe.save(form).subscribe(result => {
      this._toast.success(result.message, 'Registro exitoso');
      this._router.navigate(['sub-recetas/listado']);
    });
  }
}
