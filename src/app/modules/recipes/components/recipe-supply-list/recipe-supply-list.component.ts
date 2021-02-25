import { Component, ViewChild, OnChanges, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipeSupplyModalComponent } from '../recipe-supply-modal/recipe-supply-modal.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Recipe } from '../../models/recipe.model';
import { RecipeSelectedSupply } from '../../models/recipe-selected-supply';
import { RecipeSelectedSupplyMapper } from '../../mappers/recipe-selected-supply.mapper';
import { RecipeRegisterFomService } from '../../services/recipe-register-fom.service';

@Component({
  selector: 'recipe-supply-list',
  templateUrl: './recipe-supply-list.component.html',
  styleUrls: ['./recipe-supply-list.component.scss']
})
export class RecipeSupplyListComponent implements OnChanges, OnDestroy {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input() recipe: Recipe;
  @Input() addSupplyEvent: boolean;

  private recipeSelectedSupplyMapper: RecipeSelectedSupplyMapper;
  public suppliesSelected: RecipeSelectedSupply[] = [];
  public displayedColumns: string[] = ['code', 'name', 'category', 'measuredUnit', 'quantity', 'actions'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource([]);

  constructor(
    private _matDialog: MatDialog,
    private _formService: RecipeRegisterFomService
  ) {
    this.recipeSelectedSupplyMapper = new RecipeSelectedSupplyMapper();
  }

  ngOnChanges() {
    if (this.recipe) {
      this.suppliesSelected = this.recipeSelectedSupplyMapper.getFromRecipedetail(this.recipe.detail);
      this.setDataSourceList(this.suppliesSelected);
    }
    if (this.addSupplyEvent) this.openAddSupplyModal();
  }

  ngOnDestroy(): void {
    this._formService.supplies = null;
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

  private setDataSourceList(list: RecipeSelectedSupply[]) {
    this._formService.supplies = list;
    this.dataSource = new MatTableDataSource(list);
    this.dataSource.sort = this.sort;
  }

  public deleteSupply(element: RecipeSelectedSupply): void {
    const index = this.suppliesSelected.indexOf(element);
    this.suppliesSelected.splice(index, 1);
    this.setDataSourceList(this.suppliesSelected);
  }

  private validateNewItems(list: RecipeSelectedSupply[]): void {
    for (const item of list) {
      const founded = this.suppliesSelected.find(e => e.id == item.id);
      if (!founded) this.suppliesSelected.push(item);
    }
    this.setDataSourceList(this.suppliesSelected);
  }
}
