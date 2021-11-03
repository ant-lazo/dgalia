import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { Product } from 'app/modules/product/models/product.model';
import { ProductService } from 'app/modules/product/services/product.service';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { OutputsService } from '../../services/outputs.service';

@Component({
  selector: 'app-register-output-dialog',
  templateUrl: './register-output-dialog.component.html',
  styles: [
  ]
})
export class RegisterOutputDialogComponent implements OnInit {

  public requestData: Observable<any[]>;
  public form: FormGroup;

  constructor(
    private _headquarters: HeadquartesService,
    private _product: ProductService,
    private _dialogRef: MatDialogRef<RegisterOutputDialogComponent>,
    private _toast: AppNotificationsService,
    private _outputs: OutputsService,
    private _builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { productCode: string },
  ) {
    this.setForm();
  }

  ngOnInit(): void {
    if (this.data?.productCode) this.setRequestData();
    console.log("data: ",this.data)
  }

  private setRequestData(): void {
    this.requestData = combineLatest([
      this._headquarters.getCompleteList(),
      this._product.findByCode(this.data?.productCode)
    ]).pipe(map((resp) => {
      this.setForm(resp[1]);
      return resp;
    }));
  }

  public onClose(): void {
    this._dialogRef.close();
  }

  public onRegister(): void {
    this._outputs.saveProduct(this.form.value).subscribe((resp: JsonResp) => {
      this._toast.registerSuccess(null, resp.data);
      this._dialogRef.close(true);
    });
  }

  private setForm(product?: Product): void {
    this.form = this._builder.group({
      headquarter_id: [null, Validators.required],
      // igv: [product?.igv, Validators.required],
      igv: [null, Validators.required],
      product_code: [product?.code, Validators.required],
      quantity: [null, Validators.required],
      // unit_price: [product?.priceList, Validators.required],
      unit_price: [null, Validators.required],
      comment: [null, Validators.required],
      output_type: [null, Validators.required],
    })
  }


}



