
import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { appColors } from "app/core/config/app.config";
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { BillsPayment } from "../../../models/bills-Payment.model";


@Component({
  selector: 'app-register-payment-bills',
  templateUrl: './register-payment-bills.component.html',
  styleUrls: ['./register-payment-bills.component.scss']
})

export class RegisterPaymentBillsComponent implements OnInit {

  public editForm: FormGroup;
  private id: Number;
  public appStatus: string[] = ['Cancelado', 'Pendiente', 'Terminado'];



  constructor( private matDialogRef: MatDialogRef<RegisterPaymentBillsComponent>,
    private _appNotifications: AppNotificationsService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: BillsPayment) {
    
      var dt = new Date();
      let item:BillsPayment ={comentarios : "",descStatus:"Cancelado",fechaPago  :dt,id:1,nroBills :"F005-5455",status :4};


      /*let item:BillsPayment;
      data.comentarios = "";
      data.descStatus = "";
      data.fechaPago = new Date();
      data.id = 2;
      data.nroBills = "";
      data.status = 1;*/
      this.setForm(item);
     }

  ngOnInit(): void {
  }
  formValidation(){

  }

  private setForm(data: BillsPayment) {
    this.editForm = this.formBuilder.group({
      description: [data.comentarios, Validators.required],
      name: [ { value: data.nroBills , disabled: true }, Validators.required ],
      
      address: [data.id, Validators.required],
      person_in_charge: [data.status, Validators.required],
      color: [data.descStatus, Validators.required]
    });
    this.id = data.id;
  }


public onNoCreate() {
    this.matDialogRef.close();
  }


}
