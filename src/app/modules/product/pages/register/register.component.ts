import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'product-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  public requestData: Observable<any>;
  public productCategoryList: ProductCategory[] = [];
  public measureUnitList: MeasuredUnit[] = [];

  constructor(
    private _categories: ProductCategoriesService,
    private _measureUnit: MeasuredUnitService,
    private _products: ProductService,
    private _toast: ToastrService,
    private _router: Router

  ) { }

  ngOnInit(): void {
    this.setData();
  }

  public listenForm(form: RegisterProductFormModel): void {
    this._products.save(form).subscribe((resp: JsonResp) => {
      this._toast.success('Producto registrado exitosamente', 'Genial!');
      this._router.navigate(['productos/listado']);
    });
  }

  private setData(): void {
    this.requestData = combineLatest([
      this._categories.getList(),
      this._measureUnit.getGetList(),
    ]).pipe(map((data: any) => {
      this.productCategoryList = data[0];
      this.measureUnitList = data[1]
      return data;
    }));
  }

}
