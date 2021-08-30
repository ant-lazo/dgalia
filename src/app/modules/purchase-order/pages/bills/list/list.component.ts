
import { ChangeDetectionStrategy, Component, Input, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PurchaseOrderSts } from 'app/core/models/puecharse-order-sts.model';
import {BillsOrder } from 'app/modules/purchase-order/models/bills-order.model';



import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {  RegisterPaymentBillsComponent } from '../register-payment-bills/register-payment-bills.component';


import { PurchaseOrder } from 'app/modules/purchase-order/models/ purchase-order.model';
import { PurchaseOrderComponent } from 'app/modules/purchase-order/purchase-order.component';
import { bindAll } from 'lodash';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {


  
//@Input() list: BillsOrder[];

public list: BillsOrder[] = [];

@ViewChild(MatSort, { static: true }) sort: MatSort;
@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
public displayedColumns: string[] = ['code', 'provider', 'headquarter', 'status', 'dateVen','datePag', 'options'];
public dataSource: MatTableDataSource<BillsOrder> = new MatTableDataSource([]);


constructor(
  private _router: Router,
  public matDialog: MatDialog
) { }

  ngOnInit(): void {
    this.loadData();
    
  }
  public loadData(){
    var today = new Date();

    let item:BillsOrder = {id : 1,code : "F008-54545",descProveedor : "Inkafarma",descSede : "Principal",codStatus : "teal",
    descStatus:"Pendiente",DatePayment :"10/05/2021",createdAt :"10/05/2021" };

    this.list.push(item);


    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
    console.log(this.list);

  }

  RegisterBills():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "550px";
    dialogConfig.width = "800px";
    const modalDialog = this.matDialog.open(RegisterPaymentBillsComponent, dialogConfig);
  }


  public getStatusColor(code: string): string {
    let color: string = '';
    switch (code) {
      case PurchaseOrderSts.Approved:
        color = 'teal';
        break;
      case PurchaseOrderSts.Rejected:
      case PurchaseOrderSts.Cancel:
        color = 'red';
        break;
      default:
        color = 'indigo';
        break;
    }

    return color;
  }

}
