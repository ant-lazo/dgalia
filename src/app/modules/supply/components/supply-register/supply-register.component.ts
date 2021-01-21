import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MeasuredUnit } from "app/modules/measured-units/models/measured-unit.model";
import { MeasuredUnitService } from "app/modules/measured-units/services/measured-unit.service";
import { ProductCategoriesService } from "app/modules/product-category/services/product-categories.service";

@Component({
  selector: 'app-supply-register',
  templateUrl: './supply-register.component.html',
  styleUrls: ['./supply-register.component.scss']
})
export class SupplyRegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public measuddredUnitList: MeasuredUnit[];

  constructor(
    private matDialogRef: MatDialogRef<SupplyRegisterComponent>,
    private formBuilder: FormBuilder,
    public _productCategory: ProductCategoriesService,
    public _measuredUnit: MeasuredUnitService,
  ) {
    this.setForm();
  }

  ngOnInit(): void {
  }

  public onNoCreate() {
    this.matDialogRef.close();

  }

  public formValidation() {

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
