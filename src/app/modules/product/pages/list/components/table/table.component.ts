import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'app/modules/product-category/models/product-category.interface';
import { Product } from 'app/modules/product/models/product.model';
import { ProductService } from 'app/modules/product/services/product.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'products-list-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public productListRequest: Observable<Product[]>;
  public produdcList: Product[] = [];

  constructor(
    private _products: ProductService
  ) { }

  ngOnInit(): void {
    this.setProductList();
  }

  private setProductList(): void {
    this.productListRequest = this._products.getlist().pipe(map((products: Product[]) => {
      this.produdcList = products;
      return products;
    }));
  }

}
