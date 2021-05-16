import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Warehouse } from '../../../../models/warehouse.model';
import { WarehouseService } from '../../../../services/warehouse.service';

@Component({
  selector: 'warehouse-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {

  public warehouseRequest: Observable<Warehouse[]>;
  private warehouseList: Warehouse[] = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public displayedColumns: string[] = ['code', 'name', 'location', 'options'];
  public dataSource: MatTableDataSource<Warehouse> = new MatTableDataSource([]);

  constructor(
    private _warehouse: WarehouseService
  ) { }

  ngOnInit(): void {
    this.setWarehouseList();
  }

  private setWarehouseList(): void {
    this.warehouseRequest = this._warehouse.getList().pipe(map((list: Warehouse[]) => {
      this.warehouseList = list;
      this.setDatablelist(list);
      return list;
    }));
  }

  private setDatablelist(list: Warehouse[]): void {
    this.dataSource = new MatTableDataSource(list);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }



}
