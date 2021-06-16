import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductStock } from '../../models/product-stock.model';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})
export class ProductListComponent implements OnInit {

  public request: Observable<ProductStock[]>
  public items: ProductStock[] = [];
  public filteredlist: ProductStock[] = [];

  constructor(
    private _inventory: InventoryService
  ) { }

  ngOnInit(): void {
    this.request = this._inventory.getSotck().pipe(map(e => {
      this.items = e;
      this.filteredlist = e;
      return e;
    }));
  }

  public listenFilter(action: string): void {

    const type = action.split(':')[0];
    const param = action.split(':')[1];

    this.filteredlist = [];
    let list: ProductStock[] = [];

    if (type === 'headquarter') {
      list = this.items.filter(e => e.headquarter.name === param);
      this.filteredlist = new Array(...list);
    }

    if (type === 'name') {
      list = this.items.filter(e => e.productName.toUpperCase().includes(param.toUpperCase()));
      this.filteredlist = list;
      return;
    }
  }


}
