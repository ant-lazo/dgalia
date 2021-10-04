
import { ChangeDetectionStrategy, Component, Input, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PurchaseOrderSts } from 'app/core/models/puecharse-order-sts.model';
import {GuidesOrder } from 'app/modules/purchase-order/models/Guides-order.model';



import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


import { PurchaseOrder } from 'app/modules/purchase-order/models/ purchase-order.model';
import { RegisterGuidesComponent } from 'app/modules/purchase-order/pages/guide/modal/register-guides/register-guides.component';
import { bindAll } from 'lodash';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListGuidesComponent implements OnInit {

 

  
//@Input() list: BillsOrder[];

public list: GuidesOrder[] = [];

@ViewChild(MatSort, { static: true }) sort: MatSort;
@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
public displayedColumns: string[] = ['code', 'provider', 'sede', 'status', 'dateRegister', 'options'];
public dataSource: MatTableDataSource<GuidesOrder> = new MatTableDataSource([]);


constructor(
  private _router: Router,
  public matDialog: MatDialog
) { }

  ngOnInit(): void {
    this.loadData();
    
  }
  public loadData(){
    var today = new Date();

    let item:GuidesOrder = {id : 1,code : "G0100",descProveedor : "Marco Botton",descSede : "Los Olivos",codStatus : "teal",
    descStatus:"Pendiente",DateRegister :"19 set. 2021" };

    this.list.push(item);


    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
    console.log(this.list);

  }

  RegisterGuides():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "550px";
    dialogConfig.width = "800px";
    const modalDialog = this.matDialog.open(RegisterGuidesComponent, dialogConfig);
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
