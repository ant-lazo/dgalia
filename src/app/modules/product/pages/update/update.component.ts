import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { MeasuredUnit } from 'app/modules/measured-units/models/measured-unit.model';
import { MeasuredUnitService } from 'app/modules/measured-units/services/measured-unit.service';
import { ProductCategory } from 'app/modules/product-category/models/product-category.interface';
import { ProductCategoriesService } from 'app/modules/product-category/services/product-categories.service';
import { ToastrService } from 'ngx-toastr';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegisterProductFormModel } from '../../models/form-models/register-product-form.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-update',
  templateUrl: './update.component.html',
  styles: [
  ]
})
export class UpdateComponent implements OnInit {

  public requestData: Observable<any>;
  public measureUnitList: MeasuredUnit[];
  public categoryList: ProductCategory[];

  constructor(
    private _measureUnits: MeasuredUnitService,
    private _categories: ProductCategoriesService,
    private _product: ProductService,
    private _actiavtedRoute: ActivatedRoute,
    private _toast: ToastrService,
    private _loaciton: Location
  ) { }

  ngOnInit(): void {
    this.setRequestData();
  }

  private get productCode(): string {
    return this._actiavtedRoute.snapshot.params.code;
  }

  public setForm(form: RegisterProductFormModel, code: string): void {
    const request: Observable<JsonResp> = this._product.update(form, code);
    request.subscribe((resp: JsonResp) => {
      this._toast.success(`Producto ${code} actualizado correctamente`, 'Perfecto, esto ha salido muy bien!!');
      this._loaciton.back();
    });
  }

  private setRequestData(): void {
    this.requestData = combineLatest([
      this._measureUnits.getGetList(),
      this._categories.getList(),
      this._product.findByCode(this.productCode)
    ]).pipe(map((result: any[]) => {
      this.measureUnitList = result[0];
      this.categoryList = result[1];
      return result[2];
    }));
  }

}
