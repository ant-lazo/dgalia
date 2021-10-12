import { Component, EventEmitter, Input, OnInit, Output, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PurchaseOrder } from 'app/modules/purchase-order/models/ purchase-order.model';
import { BillsStatus } from '../../../models/bills-status.model'
import { BillsService } from '../../../services/bills.service';
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-register-bills',
  templateUrl: './register-bills.component.html',
  styleUrls: ['./register-bills.component.scss']
})
export class RegisterBillsComponent implements OnInit {

  public billsStatus: Observable<BillsStatus[]>;
  public formRegisterBill: FormGroup;
  public purchaseOrderId: number;
  public providerDocument: string;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RegisterBillsComponent>,
    private _appNotifications: AppNotificationsService,
    private _bill: BillsService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: PurchaseOrder
    //@Inject(MAT_DIALOG_DATA) public data: PurchaseOrder
  ) {
    this.setForm();
    this.purchaseOrderId= data.id;
    this.providerDocument= data.provider.document;
   }

  ngOnInit(): void {
    this.formRegisterBill.patchValue({
      purchaseOrderId: this.purchaseOrderId,
      providerDocument: this.providerDocument
    });
  }

  /*ngOnChanges(): void {  }*/

  closeModal() {
    this.dialogRef.close()
  }

  public formValidation(): void {
    if (this.formRegisterBill.valid) { 
      this.registerBill(this.formRegisterBill.value);
      return;
     }
  }

  //Registrar

  private registerBill(data: any): void {
    console.log("se registro factura");
    console.log("data: ", data);
    this._bill.registerNewBill(data).subscribe(() => {
      this._appNotifications.registerSuccess();
      this.dialogRef.close(true);
    });

  }

  private setForm(): void {
    this.formRegisterBill = this.formBuilder.group({
      purchaseOrderId: [null, Validators.required],
      code: [null, Validators.required],
      invoiceStatusId: [null, Validators.required],
      invoiceDate: [null, Validators.required],
      dueDate: [null, Validators.required],
      comments: [null, Validators.required],
      providerDocument: [null, Validators.required]
    });
    
  }
}
