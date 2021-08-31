import { Component, OnInit, Inject } from "@angular/core";


import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { appColors } from "app/core/config/app.config";
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { GuidesOrder } from "../../../../models/Guides-order.model";




@Component({
  selector: 'app-register-guides',
  templateUrl: './register-guides.component.html',
  styleUrls: ['./register-guides.component.scss']
})
export class RegisterGuidesComponent implements OnInit {

  
  public editForm: FormGroup;
  private id: Number;
  public appStatus: string[] = ['Cancelado', 'Pendiente', 'Terminado'];



  constructor( private matDialogRef: MatDialogRef<RegisterGuidesComponent>,
    private _appNotifications: AppNotificationsService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: GuidesOrder) {
    
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
  }
  formValidation(){

  }

  private setForm(data: GuidesOrder) {
    this.editForm = this.formBuilder.group({
      description: [data.id, Validators.required],
      name: [ { value: data.descProveedor , disabled: true }, Validators.required ],
      
      address: [data.descProveedor, Validators.required],
      person_in_charge: [data.descProveedor, Validators.required],
    
    });
    this.id = data.id;
  }


public onNoCreate() {
    this.matDialogRef.close();
  }

}
