import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeasuredUnit } from 'app/modules/measured-units/models/measured-unit.model';
import { ProductCategory } from 'app/modules/product-category/models/product-category.interface';

@Component({
  selector: 'product-register-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() measureUnitList: MeasuredUnit[];
  @Input() productCategoryList: ProductCategory[];

  public formGroup: FormGroup;

  constructor(
    private _builder: FormBuilder
  ) {
    this.setForm();
  }

  ngOnInit(): void {
  }

  private setForm(): void {
    this.formGroup = this._builder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      category_id: [null, Validators.required],
      measure_unit_id: [null, Validators.required],
      igv: [null, Validators.required],
      price_list: [null, Validators.required],
      sale_price: [null, Validators.required],
      weight: [null, Validators.required],
      image: [null],
      supply_id: [null]
    });
  }

}
