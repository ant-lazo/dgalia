import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PurchaseOrder, PurchaseOrderProduct } from 'app/modules/purchase-order/models/ purchase-order.model';


import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalOrderComponent } from '../../../modal-order/modal-order.component';


@Component({
  selector: 'purchase_order-detail-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsComponent implements OnInit {

  @Input() productList: PurchaseOrderProduct[];
  @Input() purchaseOrder: PurchaseOrder;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public displayedColumns: string[] = ['code', 'name', 'measuredUnit', 'unitPrice', 'quantity', 'igv', 'subtotal', 'total','acciones'];
  public dataSource: MatTableDataSource<PurchaseOrderProduct> = new MatTableDataSource([]);

  constructor(public matDialog: MatDialog) { }

  editModalOrder():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "550px";
    dialogConfig.width = "800px";
    const modalDialog = this.matDialog.open(ModalOrderComponent, dialogConfig);
  }
  ngOnInit(): void {
    console.log(this.productList);
    if (this.productList && this.productList?.length && this.productList.length > 0) this.setDataSourceList();
  }

  private setDataSourceList() {
    this.dataSource = new MatTableDataSource(this.productList);
    this.dataSource.sort = this.sort;
  }

}
