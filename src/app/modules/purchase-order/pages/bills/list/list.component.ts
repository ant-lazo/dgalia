
import { ChangeDetectionStrategy, Component, Input, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PurchaseOrderSts } from 'app/core/models/puecharse-order-sts.model';
import { PurchaseOrder } from 'app/modules/purchase-order/models/ purchase-order.model';
import { PurchaseOrderComponent } from 'app/modules/purchase-order/purchase-order.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {


  
@Input() list: PurchaseOrder[];

@ViewChild(MatSort, { static: true }) sort: MatSort;
@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
public displayedColumns: string[] = ['code', 'provider', 'headquarter', 'status', 'dateVen','datePag', 'options'];
public dataSource: MatTableDataSource<PurchaseOrder> = new MatTableDataSource([]);


constructor(
  private _router: Router
) { }

  ngOnInit(): void {
    
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
