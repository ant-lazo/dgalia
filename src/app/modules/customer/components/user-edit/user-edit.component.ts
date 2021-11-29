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
import { UserUpdate } from "../../models/user-update";
import { UserServiceService } from "../../services/user-service.service";
import { DocumentType } from "../../models/user";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.scss"],
})
export class UserEditComponent implements OnInit {
  public editForm: FormGroup;
  private fullname: string;
  public requestDocumentTypeList: Observable<DocumentType[]>;
  public measuddredUnitList: Observable<MeasuredUnit[]>;
  public productCategoryList: Observable<ProductCategory[]>;
  private readonly itemTypeDefault = "I";
  private readonly userIdDefault = 2;

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
    this.requestDocumentTypeList = this._user.getListDocumentType();
    console.log("usuario par aeditar: ", this.data);
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
      id: [data.id, Validators.required],
      fullname: [data.fullname, Validators.required],
      email: [data.email, Validators.required],
      password: [null, Validators.required],
      rolId: this.userIdDefault,
      contact: this.formBuilder.group({
        email: [data.contact.email, Validators.required],
        phone: [data.contact.phone, Validators.required],
        address: [data.contact.address, Validators.required],
        district: [data.contact.district, Validators.required],
        province: [data.contact.province, Validators.required],
        departament: [data.contact.departament, Validators.required],
        document: [data.contact.document, Validators.required],
        documentTypeId: [data.contact.documentType.id, Validators.required],
      }),
    });
  }
}
