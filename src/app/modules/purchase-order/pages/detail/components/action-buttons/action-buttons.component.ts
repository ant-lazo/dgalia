import { Component, Input, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { PurchaseOrderSts } from 'app/core/models/puecharse-order-sts.model';
import { PurchaseOrder } from 'app/modules/purchase-order/models/ purchase-order.model';
import { PurchaseOrderComponent } from 'app/modules/purchase-order/purchase-order.component';
import { PurchaseOrderService } from 'app/modules/purchase-order/services/purchase-order.service';
import { RowAppButtonModel, RowButtonType } from 'app/shared/row-buttons/models/row-nutton.model';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { Observable } from 'rxjs';

import { AddCommentUpdateModalComponent } from '../add-comment-update-modal/add-comment-update-modal.component';


import {RegisterBillsComponent } from '../../../../pages/bills/register-bills/register-bills.component';

import { RegisterGuidesComponent } from 'app/modules/purchase-order/pages/guide/modal/register-guides/register-guides.component';

@Component({
  selector: 'purchase_order-detail-action_buttons',
  templateUrl: './action-buttons.component.html',
  styles: [
  ]
})
export class ActionButtonsComponent implements OnInit {

  @Input() purchaseOrder: PurchaseOrder;

  public buttons: RowAppButtonModel[] = [];
  public updaterCommnet: string;

  constructor(
    private _router: Router,
    private _purchaseOrder: PurchaseOrderService,
    private _toast: AppNotificationsService,
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.buttons = this.getFinalButtons();
  }

  RegisterBills():void{
    //console.log("providerDocument: ",this.purchaseOrder.provider.document)
 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "550px";
    dialogConfig.width = "800px";
    // se necesita el purchaseOrder.id y purchaseOrder.provider.document
    dialogConfig.data= this.purchaseOrder;

    //const modalDialog = this._dialog.open(RegisterBillsComponent, dialogConfig);
    //this._dialog.open(RegisterBillsComponent, dialogConfig);
    this._dialog.open(RegisterBillsComponent, dialogConfig);
  }
  private getFinalButtons(): RowAppButtonModel[] {
    let finalbuttons: RowAppButtonModel[] = [];

    switch (this.purchaseOrder.status.code) {
      case PurchaseOrderSts.Draft:
        finalbuttons = [this.requiredbuttons[2], this.requiredbuttons[0], this.requiredbuttons[1]];
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

  public listenActionsPressed(action: string): void {
    const dialogRed = this._dialog.open(AddCommentUpdateModalComponent, {
      width: '70%',
      data: action === 'input' ? this.getCompletePoBody() : null
    });

    dialogRed.afterClosed().subscribe((comment: string) => {
      if (comment != null && comment !== 'cancel') {
        this.updaterCommnet = comment;
        this.validateActionPressed(action);
      }
    });
  }

  private validateActionPressed(action: string): void {
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
      case 'input':
        this.completePurchaseOrder();
        break;
      default:
        break;
    }
  }

  private updateStatus(statusCode: string): void {
    const request: Observable<JsonResp> = this._purchaseOrder.updateStatus(statusCode, this.purchaseOrder.code, this.updaterCommnet);

    request.subscribe((resp: JsonResp) => {
      this._toast.editSuccess(null, resp.data);
      this._router.navigate([PurchaseOrderComponent.listRoute]);
    });
  }


  private completePurchaseOrder(): void {
    const request: Observable<JsonResp> = this._purchaseOrder.complete(this.purchaseOrder.code, this.updaterCommnet);

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
      }),
      new RowAppButtonModel({
        action: 'input',
        color: 'primary',
        icon: 'save',
        label: 'Actualizar',
        type: RowButtonType.Stroked
      })

      
    ];
  }

  private getCompletePoBody(): any {
    return {
      title: '¿Estas seguro de hacer esto?',
      subtitle: `Con esta acción darás por completado la orden de compra, lo que quiere decir que los productos llegaron completos según el documento y estos serán ingresados a inventario.
     Si los productos no están completos, mejor ve a inventario/ingresar documento y carga la orden de compra.`
    }
  }

  RegisterGuides():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "550px";
    dialogConfig.width = "800px";
    const modalDialog = this._dialog.open(RegisterGuidesComponent, dialogConfig);
  }


}
