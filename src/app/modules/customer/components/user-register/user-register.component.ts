import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSelectChange } from "@angular/material/select";
import { MeasuredUnit } from "app/modules/measured-units/models/measured-unit.model";
import { MeasuredUnitService } from "app/modules/measured-units/services/measured-unit.service";
import { ProductCategory } from "app/modules/product-category/models/product-category.interface";
import { ProductCategoriesService } from "app/modules/product-category/services/product-categories.service";
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { Observable } from "rxjs";
import { UserServiceService } from "../../services/user-service.service";

@Component({
  selector: "app-user-register",
  templateUrl: "./user-register.component.html",
  styleUrls: ["./user-register.component.scss"],
})
export class UserRegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public measuddredUnitList: Observable<MeasuredUnit[]>;
  public productCategoryList: Observable<ProductCategory[]>;
  public supplyCode: string;
  private readonly userTypeDefault = "I";

  constructor(
    private matDialogRef: MatDialogRef<UserRegisterComponent>,
    private _appNotifications: AppNotificationsService,
    private formBuilder: FormBuilder,
    public _productCategory: ProductCategoriesService,
    public _measuredUnit: MeasuredUnitService,
    private _user: UserServiceService
  ) {
    this.setForm();
  }

  ngOnInit(): void {
    this.measuddredUnitList = this._measuredUnit.getGetList();
    this.productCategoryList = this._productCategory.getList();
  }

  public onNoCreate() {
    this.matDialogRef.close();
  }

  public formValidation(): void {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.registerUser(this.registerForm.value);
      return;
    }
  }

  private registerUser(data: any): void {
    this._user.registerNewUser(data).subscribe(() => {
      this._appNotifications.registerSuccess();
      this.matDialogRef.close(true);
    });
  }

  public getSupplyCode(event: MatSelectChange): void {
    this._user.generateCode(event.value).subscribe((code: string) => {
      this.supplyCode = code;
      this.registerForm.controls.code.setValue(code);
    });
  }

  private setForm() {
    this.registerForm = this.formBuilder.group({
      fullname: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      rol_Id: [null, Validators.required],
      emailContact: [null, Validators.required],
      phone: [null, Validators.required],
      address: [null, Validators.required],
      district: [null, Validators.required],
      province: [null, Validators.required],
      departament: [null, Validators.required],
      document: [null, Validators.required],
      documentTypeId: [null, Validators.required],
    });
  }
}
