import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DemandSheet } from 'app/modules/demand-sheets/models/demand-sheet.model';

@Component({
  selector: 'demand_sheet-list-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() demandSheetList: DemandSheet[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public displayedColumns: string[] = ['code', 'cooking-schedule', 'start', 'end', 'headquarter', 'actions'];
  public dataSource: MatTableDataSource<DemandSheet> = new MatTableDataSource();


  constructor() { }

  ngOnInit(): void {
    if (this.demandSheetList && this.demandSheetList.length > 0) this.setDataTableList(this.demandSheetList);
  }

  private setDataTableList(list: DemandSheet[]) {
    this.dataSource = new MatTableDataSource(list);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
