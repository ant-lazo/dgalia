import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from 'app/modules/purchase-order/services/purchase-order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'purchase_order-register-new_doc_info',
  templateUrl: './new-doc-info.component.html',
  styles: [
  ]
})
export class NewDocInfoComponent implements OnInit {

  public nextCodeRequest: Observable<string>
  public today: Date;

  constructor(
    private _purchaseOrder: PurchaseOrderService
  ) { }

  ngOnInit(): void {
    this.today = new Date();
    this.nextCodeRequest = this._purchaseOrder.getNextCode();
  }

}
