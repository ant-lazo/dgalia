import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MeasuredUnit } from 'app/modules/measured-units/models/measured-unit.model';
import { ProductCategory } from 'app/modules/product-category/models/product-category.interface';
import { RegisterProductFormModel } from 'app/modules/product/models/form-models/register-product-form.model';
import { Product } from 'app/modules/product/models/product.model';
import { SelectSupplyComponent } from 'app/modules/supply/components/select-supply/select-supply.component';
import { Supply } from 'app/modules/supply/models/supply';

@Component({
  selector: 'product-update-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() updateForm: EventEmitter<RegisterProductFormModel> = new EventEmitter();

  @Input() product: Product;
  @Input() muList: MeasuredUnit[];
  @Input() ctrList: ProductCategory[];

  public formGroup: FormGroup;
  public supplySelected: Supply;

  constructor(
    private _builder: FormBuilder,
    private _location: Location,
    private _matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.setForm()
  }

  public back() {
    this._location.back();
  }

  public validateUpdateData(): void {
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
      // supply_id: this.supplySelected ? this.supplySelected.id.toString() : null,
      supply_id: this.supplySelected ? this.supplySelected.id.toString() : this.product.supplyId.toString(),
      minimum_stock: form.minimum_stock.toString(),
    }
    this.updateForm.emit(registerForm);
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

  private setForm(): void {
    this.formGroup = this._builder.group({
      code: [this.product.code],
      name: [this.product.name, Validators.required],
      description: [this.product.description, Validators.required],
      category_id: [this.product.category.id, Validators.required],
      measure_unit_id: [this.product.measureUnit.id, Validators.required],
      igv: [this.product.igv, Validators.required],
      price_list: [this.product.priceList, Validators.required],
      sale_price: [this.product.salePrice, Validators.required],
      weight: [this.product.weight, Validators.required],
      image: [null],
      supply_id: [null],
      minimum_stock: [this.product.minimumStock, Validators.required],

    });
  }

}
