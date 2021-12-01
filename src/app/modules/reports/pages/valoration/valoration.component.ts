import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductStockValoration } from '../valoration/models/product-stock-valoration'
import { InventoryService } from 'app/modules/inventory/services/inventory.service';


@Component({
  selector: "app-valoration",
  templateUrl: "./valoration.component.html",
  styleUrls: [],
})
export class ValorationComponent implements OnInit {
  public request: Observable<ProductStockValoration[]>;
  public items: ProductStockValoration[] = [];
  public filteredlist: ProductStockValoration[] = [];
  public headquarterId:any =0;

  constructor(
    private _inventory: InventoryService
  ) { }

  ngOnInit(): void {
    this.request = this._inventory.getSotckValoration(this.headquarterId).pipe(map(e => {
      this.items = e;
      this.filteredlist = e;
      console.log("que viene:", this.filteredlist);
      return e;
    }));
  }


  public listenFilter(action: string): void {
    const type = action.split(":")[0];
    const param = action.split(":")[1];

    this.filteredlist = [];
    let list: ProductStockValoration[] = [];

    if (type === "headquarterId") {
      /*list = this.items.filter((e) => e.headquarter.name === param);
      this.filteredlist = new Array(...list);*/
      this.headquarterId = param;
      
    }
    console.log("afuera",this.headquarterId);

    if (type === "name") {
      list = this.items.filter((e) =>
        e.productName.toUpperCase().includes(param.toUpperCase())
      );
      this.filteredlist = list;
      return;
    }
  }
}
