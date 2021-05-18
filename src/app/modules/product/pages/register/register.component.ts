import { Component, OnInit } from '@angular/core';
import { MeasuredUnit } from 'app/modules/measured-units/models/measured-unit.model';
import { MeasuredUnitService } from 'app/modules/measured-units/services/measured-unit.service';
import { ProductCategory } from 'app/modules/product-category/models/product-category.interface';
import { ProductCategoriesService } from 'app/modules/product-category/services/product-categories.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  public requestData: Observable<any>;
  public productCategoryList: ProductCategory[]=[];
  public measureUnitList: MeasuredUnit[]=[];

  constructor(
    private _categories: ProductCategoriesService,
    private _measureUnit: MeasuredUnitService,
  ) { }

  ngOnInit(): void {
    this.setData();
  }


  private setData(): void {
    this.requestData = combineLatest([
      this._categories.getList(),
      this._measureUnit.getGetList(),
    ]).pipe(map((data: any) => {
      this.measureUnitList = data[0];
      this.productCategoryList = data[1]
      return data;
    }));
  }

}
