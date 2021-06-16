import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
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
  public rqRegister: rqRegister;

  constructor(
    private _headquarters: HeadquartesService,
    private _product: ProductService,
    private _dialogRef: MatDialogRef<RegisterOutputDialogComponent>,
    private _toast: AppNotificationsService,
    private _outputs: OutputsService,
    @Inject(MAT_DIALOG_DATA) public data: { productCode: string },
  ) { }

  ngOnInit(): void {
    if (this.data?.productCode) this.setRequestData();
  }

  private setRequestData(): void {
    this.requestData = combineLatest([
      this._headquarters.getCompleteList(),
      this._product.findByCode(this.data?.productCode)
    ]).pipe(map((resp) => {
      this.rqRegister = {
        headquarter_id: null,
        igv: resp[1].igv ?? 0,
        product_code: this.data.productCode,
        quantity: null,
        unit_price: resp[1].priceList ?? 0,
        comments: null
      }
      return resp;
    }));
  }

  public onClose(): void {
    this._dialogRef.close();
  }

  public onRegister(): void {
    if (this.rqRegister?.headquarter_id == null || this.rqRegister?.quantity == null || this.rqRegister?.quantity === 0) {
      this._toast.error('Espera, te falta algo', 'Debes completar todos los datos');
      return;
    }

    if (this.rqRegister?.comments == null) this.rqRegister.comments = 'Sin comentarios';

    this._outputs.saveProduct(this.rqRegister).subscribe((resp: JsonResp) => {
      this._toast.registerSuccess(null, resp.data);
      this._dialogRef.close(true);
    });
  }
}

interface rqRegister {
  quantity: number,
  headquarter_id: number
  unit_price: number
  igv: number,
  product_code: string;
  comments: string;
}
