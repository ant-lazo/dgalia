import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PurchaseOrder } from 'app/modules/purchase-order/models/ purchase-order.model';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalCommentsComponent } from '../../../modal-comments/modal-comments.component';
@Component({
  selector: 'purchase_order-detail-info',
  templateUrl: './info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent   {
  constructor(public matDialog: MatDialog){
    
  }

  @Input() purchaseOrder: PurchaseOrder;


  editModalOrder():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "550px";
    dialogConfig.width = "800px";
    const modalDialog = this.matDialog.open(ModalCommentsComponent, dialogConfig);
  }



}
