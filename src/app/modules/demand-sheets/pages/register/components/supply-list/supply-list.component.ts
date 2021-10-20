import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MeasuredUnit } from 'app/modules/measured-units/models/measured-unit.model';
import { ResumeFormList } from '../../models/resume-list-request-model';

@Component({
  selector: 'demand_sheets-register-supply_list',
  templateUrl: './supply-list.component.html',
  styleUrls: ['./supply-list.component.scss']
})
export class SupplyListComponent implements OnInit {

  @Input() resumenList: ResumeFormList[];
  @Input() measureUnitList: MeasuredUnit[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  //public displayedColumns: string[] = ['code', 'category', 'name', 'quantity', 'mu', 'eqcuantity', 'eqmu', 'price', 'total'];
  public displayedColumns: string[] = ['code', 'category', 'name', 'quantity', 'mu', 'eqcuantity', 'eqmu', 'price', 'total'];
  public dataSource: MatTableDataSource<ResumeFormList> = new MatTableDataSource([]);
  constructor() { }

  ngOnInit(): void {
    if (this.resumenList) this.setDatatable();
    console.log("resumenList: ",this.resumenList);
    console.log("measureUnitList: ",this.measureUnitList)
  }

  public setDatatable() {
    this.dataSource = new MatTableDataSource(this.resumenList);
    this.dataSource.sort = this.sort
  }
}
