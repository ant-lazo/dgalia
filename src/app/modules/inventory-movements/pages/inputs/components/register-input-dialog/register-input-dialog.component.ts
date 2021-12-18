import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { JsonResp } from "app/core/interfaces/json-resp.interface";
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { Product } from "app/modules/product/models/product.model";
import { ProductService } from "app/modules/product/services/product.service";
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { combineLatest, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { InputsService } from "../../services/inputs.service";

@Component({
  selector: "app-register-input-dialog",
  templateUrl: "./register-input-dialog.component.html",
  styleUrls: ["./register-input-dialog.component.scss"],
})
export class RegisterInputDialogComponent implements OnInit {
  public requestData: Observable<any[]>;
  public form: FormGroup;

  constructor(
    private _dialogRef: MatDialogRef<RegisterInputDialogComponent>,
    private _toast: AppNotificationsService,
    private _product: ProductService,
    private _inputs: InputsService,
    private _headquarters: HeadquartesService,
    private _builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { productCode: string, headquarterId: number}
  ) {
    this.setForm();
  }

  ngOnInit(): void {
    if (this.data?.productCode) this.setRequestData();
    console.log("data: ", this.data);
  }

  private setRequestData(): void {
    this.requestData = combineLatest([
      this._product.findByCode(this.data?.productCode),
      this._headquarters.getCompleteList()
    ]).pipe(
      map((resp) => {
        this.setForm(resp[0]);
        return resp;
      })
    );
  }

  public onClose(): void {
    this._dialogRef.close();
  }

  public onRegister(): void {
    this._inputs.saveProduct(this.form.value).subscribe((resp: JsonResp) => {
      this._toast.registerSuccess(null, resp.data);
      this._dialogRef.close(true);
    });
  }

  private setForm(product?: Product): void {
    this.form = this._builder.group({
      product_code: [product?.code, Validators.required],
      headquarter_id: [this.data.headquarterId, Validators.required],
      //igv: [product?.igv, Validators.required],
      input_type: [null, Validators.required],
      igv: [null, Validators.required],
      quantity: [null, Validators.required],
      unit_price: [product?.priceList, Validators.required],
      //unit_price: [null, Validators.required],
      comment: [null, Validators.required],
    });
  }
}
