import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MeasuredUnit } from 'app/modules/measured-units/models/measured-unit.model';
import { ProductCategory } from 'app/modules/product-category/models/product-category.interface';
import { RegisterProductFormModel } from 'app/modules/product/models/form-models/register-product-form.model';
import { SelectSupplyComponent } from 'app/modules/supply/components/select-supply/select-supply.component';
import { Supply } from 'app/modules/supply/models/supply';

@Component({
  selector: 'product-register-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() measureUnitList: MeasuredUnit[];
  @Input() productCategoryList: ProductCategory[];
  @Output() registerForm: EventEmitter<RegisterProductFormModel> = new EventEmitter();

  public formGroup: FormGroup;
  public supplySelected: Supply;

  constructor(
    private _builder: FormBuilder,
    private _location: Location,
    private _matDialog: MatDialog
  ) {
    this.setForm();
  }

  ngOnInit(): void {
  }

  public back() {
    this._location.back();
  }

  public listenFileSelected(img: File): void {
    this.formGroup.controls.image.setValue(img);
  }

  public openSelectSupplyDialog(): void {
    const dialogReg = this._matDialog.open(SelectSupplyComponent, {
      width: '800px',
      height: '70%',
    })

    dialogReg.afterClosed().subscribe((result: Supply) => {
      if (result) this.supplySelected = result;
    })
  }

  public validateRegisterData(): void {
    const form = this.formGroup.value;
    const registerForm: RegisterProductFormModel = {
      name: form.name,
      description: form.description,
      category_id: form.category_id.toString(),
      measure_unit_id: form.measure_unit_id.toString(),
      igv: form.igv.toString(),
      price_list: form.price_list.toString(),
      sale_price: form.sale_price.toString(),
      weight: form.weight.toString(),
      image: form.image,
      supply_id: form.supply_id ? form.supply_id.toString() : null,
    }
    this.registerForm.emit(registerForm);
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
