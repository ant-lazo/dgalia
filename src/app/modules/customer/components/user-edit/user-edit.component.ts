import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MeasuredUnit } from "app/modules/measured-units/models/measured-unit.model";
import { MeasuredUnitService } from "app/modules/measured-units/services/measured-unit.service";
import { ProductCategory } from "app/modules/product-category/models/product-category.interface";
import { ProductCategoriesService } from "app/modules/product-category/services/product-categories.service";
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { Observable } from "rxjs";
import { User } from "../../models/user";
import { UserServiceService } from "../../services/user-service.service";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.scss"],
})
export class UserEditComponent implements OnInit {
  public editForm: FormGroup;
  private fullname: string;
  public measuddredUnitList: Observable<MeasuredUnit[]>;
  public productCategoryList: Observable<ProductCategory[]>;
  private readonly itemTypeDefault = "I";

  constructor(
    private matDialogRef: MatDialogRef<UserEditComponent>,
    private _appNotifications: AppNotificationsService,
    private formBuilder: FormBuilder,
    public _productCategory: ProductCategoriesService,
    public _measuredUnit: MeasuredUnitService,
    private _user: UserServiceService,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.setForm(this.data);
  }

  ngOnInit(): void {
    this.measuddredUnitList = this._measuredUnit.getGetList();
    this.productCategoryList = this._productCategory.getList();
  }

  public onNoCreate() {
    this.matDialogRef.close();
  }

  public formValidation(): void {
    if (this.editForm.valid) {
      this.editSupply(this.editForm.value);
      return;
    }
  }

  private editSupply(data: any): void {
    data.id = this.fullname;
    this._user.editUser(data).subscribe(() => {
      this._appNotifications.editSuccess();
      this.matDialogRef.close(true);
    });
  }

  private setForm(data: User) {
    this.editForm = this.formBuilder.group({
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
    this.fullname = data.fullname;
  }
}
