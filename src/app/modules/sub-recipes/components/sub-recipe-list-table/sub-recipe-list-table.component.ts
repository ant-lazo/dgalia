import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { SubRecipe } from '../../models/sub-recipe.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sub-recipe-list-table',
  templateUrl: './sub-recipe-list-table.component.html',
  styleUrls: ['./sub-recipe-list-table.component.scss']
})
export class SubRecipeListTableComponent implements OnChanges {

  @Input() list: SubRecipe[];
  @Output() selectedToDelete: EventEmitter<any> = new EventEmitter();
  @Output() selectedToDetail: EventEmitter<any> = new EventEmitter();
  @Output() selectedToEdit: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns: string[] = ['code', 'name', 'price', 'cost', 'headquarter', 'course', 'options'];
  public dataSource: MatTableDataSource<SubRecipe> = new MatTableDataSource([]);

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
