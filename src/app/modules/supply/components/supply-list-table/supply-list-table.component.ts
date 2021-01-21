import { Component, Input, ViewChild, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Supply } from '../../models/supply';

@Component({
  selector: 'app-supply-list-table',
  templateUrl: './supply-list-table.component.html',
  styleUrls: ['./supply-list-table.component.scss']
})
export class SupplyListTableComponent implements OnChanges {

  @Input() list: Supply[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public displayedColumns: string[] = ['image', 'code', 'name', 'category', 'measuredUnit', 'actions'];
  public dataSource: MatTableDataSource<Supply> = new MatTableDataSource([]);

  constructor() { }

  ngOnChanges() {
    if (this.list) this.setDataSourceList();
  }

  private setDataSourceList() {
    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
