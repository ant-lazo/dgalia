import { Component, Input, OnChanges, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MeasuredUnit } from '../../models/measured-unit.model';
import { MeasuredUnitListTableModel } from '../../view-models/list-table.model';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnChanges {

  @Input() list: MeasuredUnit[];
  @Input() model: MeasuredUnitListTableModel;
  @Output() onSelected: 'update' | 'delete';
  @Output() selectedToDelete: EventEmitter<any> = new EventEmitter();
  @Output() selectedToEdit: EventEmitter<any> = new EventEmitter();
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public dataSource: MatTableDataSource<MeasuredUnit> = new MatTableDataSource([]);

  constructor() { }

  ngOnChanges(): void {
    if (this.list && this.list.length > 0) this.setDataSourceList(this.list);
  }

  private setDataSourceList(list: MeasuredUnit[]): void {
    this.dataSource = new MatTableDataSource(list);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}
