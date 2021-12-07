import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MeasuredUnit } from 'app/modules/measured-units/models/measured-unit.model';
import { ResumeFormList } from '../../models/resume-list-request-model';
import { MeasuredUnitService } from 'app/modules/measured-units/services/measured-unit.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'demand_sheets-register-supply_list',
  templateUrl: './supply-list.component.html',
  styleUrls: ['./supply-list.component.scss']
})
export class SupplyListComponent implements OnInit {

  @Input() resumenList: ResumeFormList[];

  public measureUnitList: Observable<MeasuredUnit[]>;

  lista : MeasuredUnit[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public displayedColumns: string[] = ['code', 'category', 'name', 'quantity', 'mu', 'eqcuantity', 'eqmu', 'price', 'total'];
  public dataSource: MatTableDataSource<ResumeFormList> = new MatTableDataSource([]);
  constructor(
    private _measureUnits: MeasuredUnitService,
  ) { }

  ngOnInit(): void {
    if (this.resumenList){ this.setDatatable()}
    console.log("resumenList: ",this.resumenList);
    //this.data = Object.values(this.measureUnitList)
    //console.log("measureUnitList: ",this.measureUnitList)
    this.measureUnitList=this._measureUnits.getGetList();
    console.log("measureUnitList: ",this.measureUnitList);
    this.measureUnitList.subscribe(a=>{this.lista=a});
  }

  public setDatatable() {
    this.dataSource = new MatTableDataSource(this.resumenList);
    this.dataSource.sort = this.sort;
    console.log("datasource: ",this.dataSource);
  }

}
