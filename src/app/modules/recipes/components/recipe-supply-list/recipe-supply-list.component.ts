import { Component, ViewChild, OnChanges,   Input } from '@angular/core';
import { RowAppButtonModel, RowButtonType } from 'app/shared/row-buttons/models/row-nutton.model';
import { MatDialog } from '@angular/material/dialog';
import { RecipeSupplyModalComponent } from '../recipe-supply-modal/recipe-supply-modal.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Recipe } from '../../models/recipe.model';
import { RecipeSelectedSupply } from '../../models/recipe-selected-supply';
import { RecipeSelectedSupplyMapper } from '../../mappers/recipe-selected-supply.mapper';

@Component({
  selector: 'recipe-supply-list',
  templateUrl: './recipe-supply-list.component.html',
  styleUrls: ['./recipe-supply-list.component.scss']
})
export class RecipeSupplyListComponent implements OnChanges {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input() eliminarButtom: boolean = true;
  @Input() recipe: Recipe;

  private recipeSelectedSupplyMapper: RecipeSelectedSupplyMapper;
  public suppliesSelected: RecipeSelectedSupply[] = [];
  public addButtons: RowAppButtonModel[];
  public displayedColumns: string[] = [ 'code', 'name', 'category', 'measuredUnit', 'quantity', 'actions'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource([]);


  constructor(
    private _matDialog: MatDialog,
    private _toast: ToastrService
  ) {
    this.buildAddSupplyButton()
    this.recipeSelectedSupplyMapper = new RecipeSelectedSupplyMapper();
  }

  ngOnChanges() {
    if (this.recipe) {  
      this.suppliesSelected = this.recipeSelectedSupplyMapper.getFromRecipedetail(this.recipe.detail);
      this.setDataSourceList(this.suppliesSelected);
    }
  }


  public showAddSupplyModel() {
    const dialogRef = this._matDialog.open(RecipeSupplyModalComponent, {
      width: '850px',
      height: '650px'
    });

    dialogRef.afterClosed().subscribe((list: RecipeSelectedSupply []) => {
      if (list && list.length > 0) this.validateNewItems(list)
    });
  }
  private buildAddSupplyButton() {
    this.addButtons = [
      new RowAppButtonModel({
        action: 'add',
        color: 'primary',
        icon: 'add_circle_outline',
        label: 'Añadir insumo',
        type: RowButtonType.Stroked
      }),
    ];
  }
  private setDataSourceList(list: RecipeSelectedSupply[]) {
    this.dataSource = new MatTableDataSource(list);
    this.dataSource.sort = this.sort;
  }

  public deleteSupply(element: RecipeSelectedSupply): void {
    const index = this.suppliesSelected.indexOf(element);
    this.suppliesSelected.splice(index, 1);
    this.setDataSourceList(this.suppliesSelected);
  }

  private validateNewItems(list: RecipeSelectedSupply[] ): void {
   for (const item of list) {
     const founded = this.suppliesSelected.find(e => e.id == item.id);
     if (!founded) this.suppliesSelected.push(item);
   } 
   this.setDataSourceList(this.suppliesSelected);
  }
}
