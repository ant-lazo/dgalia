import { ChangeDetectionStrategy, Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PurchaseOrder } from 'app/modules/purchase-order/models/ purchase-order.model';
import { PurchaseOrderComponent } from 'app/modules/purchase-order/purchase-order.component';

@Component({
  selector: 'purchase_order-list-table',
  templateUrl: './list-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTableComponent implements OnChanges {


  @Input() list: PurchaseOrder[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns: string[] = ['code', 'provider', 'headquarter', 'status', 'date', 'options'];
  public dataSource: MatTableDataSource<PurchaseOrder> = new MatTableDataSource([]);

  constructor(
    private _router: Router
  ) { }

  ngOnChanges(): void {
    if (this.list && this.list.length && this.list.length > 0) this.setDatatable();
  }

  public navigateToDetail(code: string): void {
    this._router.navigate([PurchaseOrderComponent.detailRoute, code])
  }

  public setDatatable() {
    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }
}
