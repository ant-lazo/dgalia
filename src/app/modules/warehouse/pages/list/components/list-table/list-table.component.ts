import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { DeleteAlertComponent } from 'app/shared/delete-alert/delete-alert.component';
import { ToastrService } from 'ngx-toastr';
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
    private _warehouse: WarehouseService,
    private _router: Router,
    private _dialog: MatDialog,
    private _toat: ToastrService
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

  public onUpdatepressed(code: string): void {
    this._router.navigate(['almacenes/actualizar', code]);
  }

  public openDeleteAlertDialog(warehouse: Warehouse): void {
    const dialog = this._dialog.open(DeleteAlertComponent, {
      width: '70%',
      data: {
        title: `la sede ${warehouse.getName()}`,
      }
    })

    dialog.afterClosed().subscribe((result: boolean) => {
      if (result) this.deleteWarehouse(warehouse.getId()) ;
    })
  }

  private deleteWarehouse(id: number): void {
    const request: Observable<JsonResp> = this._warehouse.delete(id);
    request.subscribe((result: JsonResp) => {
      this._toat.success('Almacen eliminado exitsamente', 'vaya, al parecer todo salió bien :)')
      this.setWarehouseList();
    });
  }
}
