import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MeasuredUnit } from 'app/modules/measured-units/models/measured-unit.model';
import { CookingScheduleResumen } from 'app/modules/programation/models/cooking-schedule-resumen.model';

@Component({
  selector: 'logistic-demand_sheets-register-supply_list',
  templateUrl: './supply-list.component.html',
  styleUrls: ['./supply-list.component.scss']
})
export class SupplyListComponent implements OnInit {

  @Input() resumenList: CookingScheduleResumen[];
  @Input() measureUnitList: MeasuredUnit[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public displayedColumns: string[] = ['code', 'category', 'name', 'quantity', 'mu', 'eqcuantity', 'eqmu', 'price', 'total'];
  public dataSource: MatTableDataSource<CookingScheduleResumen> = new MatTableDataSource([]);
  constructor() { }

  ngOnInit(): void {
    if (this.resumenList) this.setDatatable();
  }

  public setDatatable() {
    this.dataSource = new MatTableDataSource(this.resumenList);
    this.dataSource.sort = this.sort
  }

}
