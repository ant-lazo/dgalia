import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Recipe } from 'app/modules/recipes/models/recipe.model';

@Component({
  selector: 'cooking_schedule-detail-recipe_list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Input() recipeList: Recipe[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public displayedColumns: string[] = ['code', 'name', 'platos', 'curso', 'clase', 'course'];
  public dataSource: MatTableDataSource<Recipe> = new MatTableDataSource([]);

  constructor() { }

  ngOnInit(): void {
    if (this.recipeList && this.recipeList.length > 0) this.setDatatable();
  }

  public setDatatable() {
    this.dataSource = new MatTableDataSource(this.recipeList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

}
