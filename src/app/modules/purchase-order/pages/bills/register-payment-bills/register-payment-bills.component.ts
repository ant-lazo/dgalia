
import { Component, OnInit, Inject,Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { appColors } from "app/core/config/app.config";
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { BillsPayment } from "../../../models/bills-Payment.model";
import {BillsOrder } from 'app/modules/purchase-order/models/bills-order.model';
import {BillsStatus } from 'app/modules/purchase-order/models/bills-status.model';
import {BillsService} from '../../../services/bills.service'
import { Router } from '@angular/router';
import { PurchaseOrderComponent } from 'app/modules/purchase-order/purchase-order.component';
@Component({
  selector: 'app-register-payment-bills',
  templateUrl: './register-payment-bills.component.html',
  styleUrls: ['./register-payment-bills.component.scss']
})

export class RegisterPaymentBillsComponent implements OnInit {
  //@Input() measureUnitList: BillsStatus[];
  public editForm: FormGroup;
  //private id: Number;
  //public appStatus:Array<BillsStatus> =[{id : 1,description : "sad",name :"d"} ];

  id: number;
  code: string;
  paidDate:string;
  paidComments:string;
  dateToday: string;
  billsOrder: BillsOrder;



  constructor( private matDialogRef: MatDialogRef<RegisterPaymentBillsComponent>,
    private _appNotifications: AppNotificationsService,
    private formBuilder: FormBuilder,
    private _bill:BillsService,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: BillsOrder) {
    
      //var dt = new Date();
      /*var f = new Date();
      this.dateToday = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
      console.log("fecha hoy: ",this.dateToday)*/
      console.log("BillsOrder ",data);
      this.id=data.id;
      this.code=data.code;
      this.paidDate=data.paidDate;
      //this.billsOrder = data;
      console.log("fecha del data: ",data.paidDate);
      console.log("fecha ya asignada: ",this.paidDate);
      this.paidComments=data.paidComments
      //let item:BillsPayment ={comentarios : "05/07/2021",descStatus:"Cancelado",fechaPago  :dt,id:1,nroBills :"F005-5455",status :4};


      /*let item:BillsPayment;
      data.comentarios = "";
      data.descStatus = "";
      data.fechaPago = new Date();
      data.id = 2;
      data.nroBills = "";
      data.status = 1;*/
      //this.setForm(item);
      this.setForm();
     }

  ngOnInit(): void {
    this.editForm.patchValue({
      code: this.code,
      paidDate: this.paidDate,
      paidComments:this.paidComments,
      id:this.id
    });

    //this.loadStatus();
  }
  formValidation(){
    //console.log("data: ",data)
    if (this.editForm.valid) { 
      this.updatePaid(this.editForm.value);
      console.log("valores del form: ", this.editForm.value)
      return;
     }
  }

  private updatePaid(data: any): void {
    console.log("se registro factura");
    console.log("data: ", data);
    this._bill.updatePaid(data).subscribe(() => {
      //prueba 
      //this.billsOrder = this.billsOrder.filter(bo => bo !== this.billsOrder)

      this._appNotifications.registerSuccess();
      this.matDialogRef.close(true);
    });
    //this._router.navigate([PurchaseOrderComponent.listRoute]);
    //this._router.navigate([PurchaseOrderComponent.registerPaid]);
    //window.location.href = 'index.html';
    //window.location.href = 'app/modules/purchase-order/pages/bills/register-payment-bills/register-payment-bills.component.html';
    //window.location.href = 'http://localhost:4200/#/orden-de-compra/listado-Factura';
  }

  /*private loadStatus(): void {
    this.service.getlistStatus().subscribe(
      (e) =>{
          console.log(e);
          if(e.data.length > 0){
            this.appStatus = <Array<BillsStatus>>(e.data);
            console.log(this.appStatus);
          }
      },(r)=>{
            console.error(r);
      }
    );
      //this.produdcList = products;
      //this.setDataTableList(products)
      //return products;
    
  }*/

  /*private setForm(data: BillsPayment) {
    this.editForm = this.formBuilder.group({
      description: [data.id, Validators.required],
      name: [ { value: data.nroBills , disabled: true }, Validators.required ],
      
      address: [data.comentarios, Validators.required],
      person_in_charge: [data.status, Validators.required],
      color: [data.descStatus, Validators.required]
    });
    this.id = data.id;
  }*/

  private setForm() {
    this.editForm = this.formBuilder.group({
      id:  [  null , Validators.required ],
      code: [ {value:null, disabled: true }, Validators.required],
      paidDate: [  null , Validators.required ],
      paidComments: [null, Validators.required]
    });

  }


public onNoCreate() {
    this.matDialogRef.close();
  }


}
