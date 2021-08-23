import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PurchaseOrderProduct } from 'app/modules/purchase-order/models/ purchase-order.model';

@Component({
  selector: 'purchase_order-detail-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsComponent implements OnInit {

  @Input() productList: PurchaseOrderProduct[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public displayedColumns: string[] = ['code', 'name', 'measuredUnit', 'unitPrice', 'quantity', 'igv', 'subtotal', 'total','acciones'];
  public dataSource: MatTableDataSource<PurchaseOrderProduct> = new MatTableDataSource([]);

  constructor() { }

  ngOnInit(): void {
    if (this.productList && this.productList?.length && this.productList.length > 0) this.setDataSourceList();
  }

  private setDataSourceList() {
    this.dataSource = new MatTableDataSource(this.productList);
    this.dataSource.sort = this.sort;
  }

}
