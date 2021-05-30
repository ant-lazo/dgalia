import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CookingSchedule } from 'app/modules/programation/models/cooking-schedule.model';

@Component({
  selector: 'logistic-cooking-schedules-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnChanges {

  @Input() cookingScheduleList: CookingSchedule[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public dataSource: MatTableDataSource<CookingSchedule> = new MatTableDataSource([]);
  public displayedColumns: string[] = ['code', 'date', 'headquarter', 'desc', 'actions'];

  constructor(
    private _router: Router
  ) { }

  ngOnChanges(): void {
    if (this.cookingScheduleList) this.setDataSourceList();
  }

  public navigateToDetail(cookingScheduleid: number): void {
    this._router.navigate(['/programacion/detalle', cookingScheduleid]);
  }

  public navigateToRegister(cookingScheduleid: number): void {
    this._router.navigate(['/hojas-de-demanda/registro', cookingScheduleid]);
  }

  private setDataSourceList(): void {
    this.dataSource = new MatTableDataSource(this.cookingScheduleList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
