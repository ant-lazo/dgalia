import { Component, OnInit, Inject } from "@angular/core";


import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { appColors } from "app/core/config/app.config";
import { PurchaseOrder } from "app/modules/purchase-order/models/ purchase-order.model";
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { GuidesOrder } from "../../../../models/Guides-order.model";
import { GuidesService } from "app/modules/purchase-order/services/guides.service";



@Component({
  selector: 'app-register-guides',
  templateUrl: './register-guides.component.html',
  styleUrls: ['./register-guides.component.scss']
})
export class RegisterGuidesComponent implements OnInit {

  
  public editForm: FormGroup;
  private id: Number;
  public appStatus: string[] = ['Cancelado', 'Pendiente', 'Terminado'];
  //public guidesOrder: GuidesOrder;
  public purchaseOrder: PurchaseOrder



  constructor( private matDialogRef: MatDialogRef<RegisterGuidesComponent>,
    private _appNotifications: AppNotificationsService,
    private formBuilder: FormBuilder,
    private _guide:GuidesService,
    @Inject(MAT_DIALOG_DATA) public data: PurchaseOrder) {

      this.purchaseOrder = data;

      console.log("el dato que viene PurchaseOrder: ",data)
    
      var dt = new Date();
      let item:GuidesOrder ={codStatus:"1",code:'3',DateRegister : "05/07/2021",descStatus:"Cancelado",id:1,descSede:"",descProveedor:""};


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
    this.editForm.patchValue({
      code: this.purchaseOrder.code,
      //paidDate: this.paidDate,
      //paidComments:this.paidComments,
      purchaseOrderId:this.purchaseOrder.id
    });

  }
  formValidation(){
    if (this.editForm.valid) { 
      this.registerGuide(this.editForm.value);
      console.log("valores del form: ", this.editForm.value)
      return;
     }
  }

  private registerGuide(data: any): void {
    console.log("se registro guia");
    console.log("data: ", data);
    this._guide.registerGuide(data).subscribe(() => {
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

  private setForm(data: GuidesOrder) {
    this.editForm = this.formBuilder.group({
      
      purchaseOrderId: [null, Validators.required],
      code: [ { value: null , disabled: true }, Validators.required ],
      driverName: [null, Validators.required],
      comments: [data.descProveedor, Validators.required]
    
    });
    this.id = data.id;
  }


public onNoCreate() {
    this.matDialogRef.close();
  }

}
