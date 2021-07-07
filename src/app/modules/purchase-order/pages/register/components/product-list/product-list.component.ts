import { Component, OnInit } from '@angular/core';

import { RqPoSelectedItem } from '../../models/po-selected-item.model';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'purchase_order-register-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public tableList: any[] = [];

  constructor(
    private _register: RegisterService,
  ) { }

  ngOnInit(): void {
    this.listenProductChanges();
  }

  private listenProductChanges(): void {
    this._register.currentProducts.subscribe((productList: RqPoSelectedItem[]) => {
      this.setProducts(productList);
    });
  }

  private setProducts(productList: RqPoSelectedItem[]): void {
    this.tableList = [];
    for (const item of productList) {
      const categoryFounded = this.tableList.find(e => e.id === item.productCategoryName);
      if (categoryFounded) {
        categoryFounded.list.push(item);
      } else {
        this.tableList.push({ id: item.productCategoryName, list: [item] });
      }
    }
  }

  public listenProductDelete(product: RqPoSelectedItem): void  {
    this._register.deletePorduct(product);
  }
}


