import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PurchaseOrder } from 'app/modules/purchase-order/models/ purchase-order.model';

@Component({
  selector: 'purchase_order-detail-info',
  templateUrl: './info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent   {

  @Input() purchaseOrder: PurchaseOrder;


}
