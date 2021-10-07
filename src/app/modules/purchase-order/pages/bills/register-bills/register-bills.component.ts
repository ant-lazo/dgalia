import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { PurchaseOrder } from 'app/modules/purchase-order/models/ purchase-order.model';
import { BillsStatus } from '../../../models/bills-status.model'
import { BillsService } from '../../../services/bills.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register-bills',
  templateUrl: './register-bills.component.html',
  styleUrls: ['./register-bills.component.scss']
})
export class RegisterBillsComponent implements OnInit {

  public billsStatus: Observable<BillsStatus[]>;
  public formRegisterBill: FormGroup;

  constructor(
    private _billsService: BillsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RegisterBillsComponent>
  ) {
    this.setForm();
   }

  ngOnInit(): void {
  }
  closeModal() {
    this.dialogRef.close();
  }

  public formValidation(): void {
    console.log(this.formRegisterBill.value)
    // console.log(this.purchaseOrder, 'purchaseOrder')
    // if (this.formRegisterBill.valid) {
     
    //   // this.registerHeadquarter(this.formRegisterBill.value);
    //   return;
    // }
  }

  private setForm(): void {
    this.formRegisterBill = this.formBuilder.group({
      code: [null, Validators.required],
      invoiceStatusId: [null, Validators.required],
      invoiceDate: [null, Validators.required],
      dueDate: [null, Validators.required],
      description: [null, Validators.required]

    });
  }
}
