import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MeasuredUnit } from "app/modules/measured-units/models/measured-unit.model";
import { MeasuredUnitService } from "app/modules/measured-units/services/measured-unit.service";
import { ProductCategory } from "app/modules/product-category/models/product-category.interface";
import { ProductCategoriesService } from "app/modules/product-category/services/product-categories.service";
import { Observable } from 'rxjs';
import { SupplyService } from "../../services/supply-service.service";

@Component({
  selector: 'app-supply-register',
  templateUrl: './supply-register.component.html',
  styleUrls: ['./supply-register.component.scss']
})
export class SupplyRegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public measuddredUnitList: Observable<MeasuredUnit[]>;
  public productCategoryList: Observable<ProductCategory[]>;

  constructor(
    private matDialogRef: MatDialogRef<SupplyRegisterComponent>,
    private formBuilder: FormBuilder,
    public _productCategory: ProductCategoriesService,
    public _measuredUnit: MeasuredUnitService,
    private _supply: SupplyService
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
    if (this.registerForm.valid) {
      this.registerSupply(this.registerForm.value);
      return;
    }
  }

  private registerSupply(data: any): void {
    this._supply.registerNewSupply(data).subscribe(() => {
      this.matDialogRef.close(true);
    });

  }

  private setForm() {
    this.registerForm = this.formBuilder.group({
      code: [null, Validators.required],
      name: [null, Validators.required],
      category_id: [null, Validators.required],
      measured_unit_id: [null, Validators.required]
    });
  }

}
