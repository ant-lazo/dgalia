
import { Component, OnInit, Inject,Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { appColors } from "app/core/config/app.config";
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { BillsPayment } from "../../../models/bills-Payment.model";
import {BillsOrder } from 'app/modules/purchase-order/models/bills-order.model';
import {BillsStatus } from 'app/modules/purchase-order/models/bills-status.model';
import {BillsService} from '../../../services/bills.service'
@Component({
  selector: 'app-register-payment-bills',
  templateUrl: './register-payment-bills.component.html',
  styleUrls: ['./register-payment-bills.component.scss']
})

export class RegisterPaymentBillsComponent implements OnInit {
  @Input() measureUnitList: BillsStatus[];
  public editForm: FormGroup;
  private id: Number;
  public appStatus:Array<BillsStatus> =[{id : 1,description : "sad",name :"d"} ];



  constructor( private matDialogRef: MatDialogRef<RegisterPaymentBillsComponent>,
    private _appNotifications: AppNotificationsService,
    private formBuilder: FormBuilder,
    private service:BillsService,
    @Inject(MAT_DIALOG_DATA) public data: BillsOrder) {
    
      var dt = new Date();
      console.log(data);
      let item:BillsPayment ={comentarios : "05/07/2021",descStatus:"Cancelado",fechaPago  :dt,id:1,nroBills :"F005-5455",status :4};


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
    this.loadStatus();
  }
  formValidation(){

  }

  private loadStatus(): void {
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
    
  }

  private setForm(data: BillsPayment) {
    this.editForm = this.formBuilder.group({
      description: [data.id, Validators.required],
      name: [ { value: data.nroBills , disabled: true }, Validators.required ],
      
      address: [data.comentarios, Validators.required],
      person_in_charge: [data.status, Validators.required],
      color: [data.descStatus, Validators.required]
    });
    this.id = data.id;
  }


public onNoCreate() {
    this.matDialogRef.close();
  }


}
