import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { PurchaseOrderSts } from 'app/core/models/puecharse-order-sts.model';
import { PurchaseOrder } from 'app/modules/purchase-order/models/ purchase-order.model';
import { PurchaseOrderComponent } from 'app/modules/purchase-order/purchase-order.component';
import { PurchaseOrderService } from 'app/modules/purchase-order/services/purchase-order.service';
import { RowAppButtonModel, RowButtonType } from 'app/shared/row-buttons/models/row-nutton.model';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'purchase_order-detail-action_buttons',
  templateUrl: './action-buttons.component.html',
  styles: [
  ]
})
export class ActionButtonsComponent implements OnInit {

  @Input() purchaseOrder: PurchaseOrder;

  public buttons: RowAppButtonModel[] = [];

  constructor(
    private _router: Router,
    private _purchaseOrder: PurchaseOrderService,
    private _toast: AppNotificationsService
  ) { }

  ngOnInit(): void {
    this.buttons = this.getFinalButtons();
  }

  private getFinalButtons(): RowAppButtonModel[] {
    let finalbuttons: RowAppButtonModel[] = [];

    switch (this.purchaseOrder.status.code) {
      case PurchaseOrderSts.Draft:
        finalbuttons = [this.requiredbuttons[0], this.requiredbuttons[1]]
        break;
      case PurchaseOrderSts.Pending:
        finalbuttons = [this.requiredbuttons[2], this.requiredbuttons[3], this.requiredbuttons[4]];
        break;
      case PurchaseOrderSts.Rejected:
        finalbuttons = [this.requiredbuttons[0], this.requiredbuttons[2]]
        break;
      case PurchaseOrderSts.Approved:
        finalbuttons = [this.requiredbuttons[5]]
        break;
      default:
        finalbuttons = [];
        break;
    }

    return finalbuttons;
  }

  public listenActions(action: string): void {
    switch (action) {
      case 'update':
        this._router.navigate([PurchaseOrderComponent.updateRoute, this.purchaseOrder.code]);
        break;
      case 'register':
        this.updateStatus(PurchaseOrderSts.Pending);
        break;
      case 'cancel':
        this.updateStatus(PurchaseOrderSts.Cancel);
        break;
      case 'reject':
        this.updateStatus(PurchaseOrderSts.Rejected);
        break;
      case 'approve':
        this.updateStatus(PurchaseOrderSts.Approved);
        break;
      default:
        break;
    }
  }

  private updateStatus(statusCode: string): void {
    const request: Observable<JsonResp> = this._purchaseOrder.updateStatus(statusCode, this.purchaseOrder.code);

    request.subscribe((resp: JsonResp) => {
      this._toast.editSuccess(null, resp.data);
      this._router.navigate([PurchaseOrderComponent.listRoute]);
    });
  }

  public get requiredbuttons(): RowAppButtonModel[] {
    return [
      new RowAppButtonModel({
        action: 'update',
        color: 'primary',
        icon: 'edit',
        label: 'Editar',
        type: RowButtonType.Stroked
      }),
      new RowAppButtonModel({
        action: 'register',
        color: 'primary',
        icon: 'save',
        label: 'Grabar',
        type: RowButtonType.Stroked
      }),
      new RowAppButtonModel({
        action: 'cancel',
        color: 'primary',
        icon: 'close',
        label: 'Cancelar/Anular',
        type: RowButtonType.Stroked
      }),
      new RowAppButtonModel({
        action: 'reject',
        color: 'primary',
        icon: 'thumb_down_off_alt',
        label: 'Rechazar',
        type: RowButtonType.Stroked
      }),
      new RowAppButtonModel({
        action: 'approve',
        color: 'primary',
        icon: 'check_circle',
        label: 'Aprobar',
        type: RowButtonType.Stroked
      }),
      new RowAppButtonModel({
        action: 'input',
        color: 'primary',
        icon: 'login',
        label: 'Registrar ingreso',
        type: RowButtonType.Stroked
      })
    ];
  }

}
