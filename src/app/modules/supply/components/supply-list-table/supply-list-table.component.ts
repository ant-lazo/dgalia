import { Component, Input, ViewChild, EventEmitter, OnChanges, Output } from '@angular/core';
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
  @Output() selectedToDelete: EventEmitter<any> = new EventEmitter();
  @Output() selectedToEdit: EventEmitter<any> = new EventEmitter();
  
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
