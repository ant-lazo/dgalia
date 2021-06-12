import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { PurchaseOrder } from '../../models/ purchase-order.model';
import { PurchaseOrderService } from '../../services/purchase-order.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [
  ]
})
export class DetailComponent implements OnInit {

  public rqPurchaseOrder: Observable<PurchaseOrder>;

  constructor(
    private _purchaseOrders: PurchaseOrderService,
    private _activatedRoute: ActivatedRoute
  ) { }

  public get purchaseOrderCode(): string {
    return this._activatedRoute.snapshot.params.code;
  }

  ngOnInit(): void {
    this.rqPurchaseOrder = this._purchaseOrders.findbyCode(this.purchaseOrderCode);
  }

}
