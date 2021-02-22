import { Component, OnInit , Inject} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MeasuredUnit } from "app/modules/measured-units/models/measured-unit.model";
import { MeasuredUnitService } from "app/modules/measured-units/services/measured-unit.service";
import { ProductCategory } from "app/modules/product-category/models/product-category.interface";
import { ProductCategoriesService } from "app/modules/product-category/services/product-categories.service";
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { Observable } from 'rxjs';
import { Supply } from "../../models/supply";
import { SupplyService } from "../../services/supply-service.service";

@Component({
  selector: 'app-supply-edit',
  templateUrl: './supply-edit.component.html',
  styleUrls: ['./supply-edit.component.scss']
})
export class SupplyEditComponent implements OnInit {

  public editForm: FormGroup;
  private id:Number;
  public measuddredUnitList: Observable<MeasuredUnit[]>;
  public productCategoryList: Observable<ProductCategory[]>;

  constructor(
    private matDialogRef: MatDialogRef<SupplyEditComponent>,
    private _appNotifications: AppNotificationsService,
    private formBuilder: FormBuilder,
    public _productCategory: ProductCategoriesService,
    public _measuredUnit: MeasuredUnitService,
    private _supply: SupplyService,
    @Inject(MAT_DIALOG_DATA) public data: Supply
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
    data.id = this.id;
    this._supply.editSupply(data).subscribe(() => {
      this._appNotifications.editSuccess();
      this.matDialogRef.close(true);
    });
  }

  private setForm(data:Supply) {
    this.editForm = this.formBuilder.group({
      code: [data.code, Validators.required],
      name: [data.name, Validators.required],
      category_id: [data.category.id, Validators.required],
      measured_unit_id: [data.measuredUnit.id, Validators.required]
    });
    this.id = data.id;
  }

}
