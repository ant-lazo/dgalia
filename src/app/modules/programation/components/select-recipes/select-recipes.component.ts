import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ReciperService } from '../../../recipes/services/reciper.service';
import { Recipe } from '../../../recipes/models/recipe.model';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTableDataSource } from '@angular/material/table';
import { CookingScheduleRecipe } from '../../models/cooking-schedule-recipe..model';
import { CookingScheduleModelMapper } from '../../mappers/cooking-schesule.mapper';

@Component({
  selector: 'app-select-recipes',
  templateUrl: './select-recipes.component.html',
  styleUrls: ['./select-recipes.component.scss']
})
export class SelectRecipesComponent implements OnInit {

  public recipeList: Recipe[] = [];
  public filteredOptions: Observable<Recipe[]>;
  public searchParam = new FormControl();
  public selectedList: CookingScheduleRecipe[] = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public displayedColumns: string[] = ['image', 'code', 'name', 'quantity', 'actions'];
  public dataSource: MatTableDataSource<CookingScheduleRecipe> = new MatTableDataSource([]);


  constructor(
    private matDialogRef: MatDialogRef<SelectRecipesComponent>,
    private _recipes: ReciperService
  ) {
    this.recipeList = [];
  }

  ngOnInit(): void {
    this.listenSeachParamChange();
    this.setRecipeList();
  }


  public onNoSelect() {
    this.matDialogRef.close();
  }

  public onSelected() {
    this.matDialogRef.close(this.selectedList);
  }

  private listenSeachParamChange() {
    this.filteredOptions = this.searchParam.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  public setRecipe(event: MatAutocompleteSelectedEvent): void {
    const founded = this.recipeList.find(e => e.name === event.option.value);
    const exist = this.selectedList.find(e => e.name === event.option.value);
    if (founded && !exist) this.selectedList.push(CookingScheduleModelMapper.getRecipeSelectedFromModel(founded));
    this.setDataSourceList(this.selectedList);
    this.searchParam.setValue('');
  }

  private _filter(value: string): Recipe[] {
    const filterValue = value.toLowerCase();
    return this.recipeList.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  private setRecipeList(): void {
    this._recipes.getAllRecipes().subscribe(recipeList => {
      this.recipeList = recipeList;
    });
  }

  private setDataSourceList(list: CookingScheduleRecipe[]) {
    this.dataSource = new MatTableDataSource(list);
    this.dataSource.sort = this.sort;
  }

  public delete(element: CookingScheduleRecipe): void {
    const i = this.selectedList.indexOf(element);
    i !== -1 && this.selectedList.splice(i, 1);
    this.setDataSourceList(this.selectedList);
  }


}
