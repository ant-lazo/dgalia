
import { ChangeDetectionStrategy, Component, Input, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PurchaseOrderSts } from 'app/core/models/puecharse-order-sts.model';
import {GuidesOrder } from 'app/modules/purchase-order/models/Guides-order.model';
import { ReferralGuide } from 'app/modules/purchase-order/models/referralGuide.model';
import { GuidesService } from "app/modules/purchase-order/services/guides.service";
import { Observable } from 'rxjs';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


import { PurchaseOrder } from 'app/modules/purchase-order/models/ purchase-order.model';
import { RegisterGuidesComponent } from 'app/modules/purchase-order/pages/guide/modal/register-guides/register-guides.component';
import { bindAll } from 'lodash';
import { PurchaseOrderComponent } from 'app/modules/purchase-order/purchase-order.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListGuidesComponent implements OnInit {

  
//@Input() list: BillsOrder[];

//public list: GuidesOrder[] = [];
//public referralGuides : Observable<ReferralGuide[]>;
public listGuide: ReferralGuide[] = [];

@ViewChild(MatSort, { static: true }) sort: MatSort;
@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
//public displayedColumns: string[] = ['code', 'provider', 'sede', 'status', 'dateRegister', 'options'];
public displayedColumns: string[] = ['driverName', 'purchaseOrder', 'provider', 'headquarter', 'date', 'options'];
//public displayedColumns: string[] = ['driverName'];
//public dataSource: MatTableDataSource<GuidesOrder> = new MatTableDataSource([]);
public dataSource: MatTableDataSource<ReferralGuide> = new MatTableDataSource([]);

constructor(
  private _router: Router,
  private _referralGuide: GuidesService,
  public matDialog: MatDialog
) { }

  ngOnInit(): void {
    this.setOrderList();
    this.loadData();
    //this.referralGuides = this._referralGuide.getAll();
  }

  public loadData(){
    var today = new Date();

   // let item:BillsOrder = {id : 1,code : "F008-54545",descProveedor : "Inkafarma",descSede : "Principal",codStatus : "teal",
    //descStatus:"Pendiente",DatePayment :"10/05/2021"};

  //  this.list.push(item);

    this.dataSource = new MatTableDataSource(this.listGuide);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
    console.log("dataSource: ",this.dataSource);

  }

  private setOrderList(): void {
    this._referralGuide.getAll().subscribe(
      (e) =>{
          //console.log("es la lista del subscribre : ",e);
          if(e.success == true && e.data !== null){
                this.listGuide = <Array<ReferralGuide>>(e.data);
                console.log("listGuide: ",this.listGuide);

                this.dataSource = new MatTableDataSource(this.listGuide);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort
                console.log(this.listGuide);

          }
      },(r)=>{
            console.error(r);
      }
    );
      //this.produdcList = products;
      //this.setDataTableList(products)
      //return products;
    
  }



  /*public loadData(){
    var today = new Date();

    let item:GuidesOrder = {id : 1,code : "G0100",descProveedor : "Marco Botton",descSede : "Los Olivos",codStatus : "teal",
    descStatus:"Pendiente",DateRegister :"19 set. 2021" };

    this.list.push(item);


    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
    console.log(this.list);

  }*/

  RegisterGuides():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "550px";
    dialogConfig.width = "800px";
    const modalDialog = this.matDialog.open(RegisterGuidesComponent, dialogConfig);
  }

  navigateToDetail(code: any){
    console.log("codigo de oc: ",code);
    this._router.navigate([PurchaseOrderComponent.detailRoute, code])
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
