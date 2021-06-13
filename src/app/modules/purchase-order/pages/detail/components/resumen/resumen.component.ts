import { Component, Input } from '@angular/core';
import { PurchaseOrder } from 'app/modules/purchase-order/models/ purchase-order.model';

@Component({
  selector: 'purchase_order-detail-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent {

  @Input() purchaseOrder: PurchaseOrder;

  constructor() { }


}
