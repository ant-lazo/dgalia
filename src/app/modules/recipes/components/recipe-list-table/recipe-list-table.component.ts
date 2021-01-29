import { Component, Input, ViewChild, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Supply } from 'app/modules/supply/models/supply';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list-table',
  templateUrl: './recipe-list-table.component.html',
  styleUrls: ['./recipe-list-table.component.scss']
})
export class RecipeListTableComponent implements OnChanges {

  @Input() list: Recipe[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public displayedColumns: string[] = ['image', 'code', 'name', 'price', 'cost', 'headquarter', 'course', 'options'];
  public dataSource: MatTableDataSource<Recipe> = new MatTableDataSource([]);

  constructor() { }

  ngOnChanges() {
    if (this.list && this.list.length > 0) this.setDatatable();
  }

  public setDatatable() {
    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }
}
