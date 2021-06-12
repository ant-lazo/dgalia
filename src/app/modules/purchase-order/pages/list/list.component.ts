import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PurchaseOrder } from '../../models/ purchase-order.model';
import { PurchaseOrderService } from '../../services/purchase-order.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public purchaseOrderList: Observable<PurchaseOrder[]>;

  constructor(
    private _purchaseOrders: PurchaseOrderService
  ) { }

  ngOnInit(): void {
    this.purchaseOrderList = this._purchaseOrders.getAll();
  }

}
