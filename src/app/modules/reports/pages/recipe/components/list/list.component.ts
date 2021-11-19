import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterRecipe } from '../../models/filter-recipe';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public productListRequest: Observable<FilterRecipe[]>;
  @Input() recipelist: FilterRecipe[];
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns: string[] = ['code', 'name', 'description', 'price', 'headquarterName', 'courseName','termName'];
  public dataSource: MatTableDataSource<FilterRecipe> = new MatTableDataSource();

  constructor() { }

  ngOnInit(): void {
    if (this.recipelist) this.setDataSourceList();
  }

  private setDataSourceList(): void {
    this.dataSource = new MatTableDataSource(this.recipelist);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
