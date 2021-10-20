import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SubRecipe } from '../../models/sub-recipe.model';
import { RowAppButtonModel } from '../../../../shared/row-buttons/models/row-nutton.model';
import { SubRecipeFormHelper } from '../../helpers/sub-recipe-form.helper';
import { SubRecipeSelectedSupply } from '../../models/sub-recipe-selected-supply';
import { SubRecipeSelectedSupplyMapper } from '../../mappers/sub-recipe-selected-supply.mapper';
import { SubReciperService } from '../../services/sub-reciper.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SubRecipeRegisterFomService } from '../../services/sub-recipe-register-fom.service';
import { map } from 'rxjs/operators';
import { SubRecipeSupplyModalComponent } from '../../components/sub-recipe-supply-modal/sub-recipe-supply-modal.component';
import { EditSubRecipeForm } from '../../models/edit-sub-recipe-form.model';

@Component({
  selector: 'app-edit-sub-recipe',
  templateUrl: './edit-sub-recipe.component.html',
  styleUrls: ['./edit-sub-recipe.component.scss']
})
export class EditSubRecipeComponent implements OnInit {

  public requestData: Observable<SubRecipe>;
  public subRecipe: SubRecipe;
  private helper: SubRecipeFormHelper;
  public rowButtons: RowAppButtonModel[];
  public suppliesSelected: SubRecipeSelectedSupply[] = [];
  private subRecipeSelectedSupplyMapper: SubRecipeSelectedSupplyMapper;

  constructor(
    public _subRecipe: SubReciperService,
    private _toast: ToastrService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _formService: SubRecipeRegisterFomService,
    private _matDialog: MatDialog
  ) {
    this.helper = new SubRecipeFormHelper();
    this.subRecipeSelectedSupplyMapper = new SubRecipeSelectedSupplyMapper();
    this.rowButtons = this.helper.buttonsRowToUpdate;
  }

  ngOnInit(): void {
    this.setSubRecipe();
  }

  public get id(): number {
    return Number(this._activatedRoute.snapshot.paramMap.get('id'));
  }

  public setSubRecipe(): void {
    this.requestData = this._subRecipe.findById(this.id).pipe(map((subRecipe: SubRecipe) => {
      this.subRecipe = subRecipe;
      this.setSubRecipeSuplies();
      return subRecipe;
    }));
  }

  private setSubRecipeSuplies(): void {
    this.suppliesSelected = this.subRecipeSelectedSupplyMapper.getFromRecipedetail(this.subRecipe.detail);
  }

  public setOptionSelected(option: string): void {
    if (option === 'addsupply') {
      this.openAddSupplyModal();
      return;
    }

    if (option === 'updateSubRecipe') {
      this.validateRecipedata();
      return;
    }
  }

  public openAddSupplyModal(): void {
    const dialogRef = this._matDialog.open(SubRecipeSupplyModalComponent, {
      width: '850px',
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

  public validateRecipedata(): void {
    if (!this._formService.updateForm) {
      this._toast.error('Por favor verifique que los campos esten correctos', 'Formulario no valido')
      return;
    }

    if (!this._formService.supplies || this._formService.supplies.length == 0) {
      this._toast.error('Debe seleccionar como minimo un insumo', 'Sub receta vacia');
      return;
    }

    this.editRecipe(this._formService.updateForm, this._formService.supplies);
  }

  public editRecipe(form: EditSubRecipeForm, supplies: SubRecipeSelectedSupply[]) {
    form.detail = supplies.map(e => { return { supplyId: e.id, measuredUnitId: e.measuredUnitId, quantity: e.quantity } })
    this._subRecipe.editSubRecipe(form).subscribe(result => {
      this._toast.success(result.message, 'Actualizado exitoso');
      this._router.navigate(['sub-recetas/listado']);
    });

  }


}
