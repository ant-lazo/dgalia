
import { ChangeDetectionStrategy, Component, Input, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PurchaseOrderSts } from 'app/core/models/puecharse-order-sts.model';
import {BillsOrder } from 'app/modules/purchase-order/models/bills-order.model';



import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {  RegisterPaymentBillsComponent } from '../register-payment-bills/register-payment-bills.component';
import {BillsService} from '../../../services/bills.service'

import { PurchaseOrder } from 'app/modules/purchase-order/models/ purchase-order.model';
import { PurchaseOrderComponent } from 'app/modules/purchase-order/purchase-order.component';
import { bindAll } from 'lodash';
import { EEXIST } from 'constants';

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
  public service:BillsService,
  public matDialog: MatDialog
) { }

  ngOnInit(): void {
    this.setBillList();
    this.loadData();
    console.log("se modifico ......")
  }
  public loadData(){
    var today = new Date();

   // let item:BillsOrder = {id : 1,code : "F008-54545",descProveedor : "Inkafarma",descSede : "Principal",codStatus : "teal",
    //descStatus:"Pendiente",DatePayment :"10/05/2021"};

  //  this.list.push(item);


    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
    console.log(this.list);

  }

  private setBillList(): void {
    this.service.getlist().subscribe(
      (e) =>{
          console.log("es la lista: ",e);
          if(e.success == true && e.data !== null){
                this.list = <Array<BillsOrder>>(e.data);
                console.log(this.list);

                this.dataSource = new MatTableDataSource(this.list);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort
                console.log(this.list);

          }
      },(r)=>{
            console.error(r);
      }
    );
      //this.produdcList = products;
      //this.setDataTableList(products)
      //return products;
    
  }

  RegisterBills(event:any):void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "550px";
    dialogConfig.width = "800px";
    dialogConfig.data = event;
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
