import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { ProductStock } from "app/modules/inventory/models/product-stock.model";
import { InventoryService } from "app/modules/inventory/services/inventory.service";

@Component({
  selector: "app-kardex",
  templateUrl: "./kardex.component.html",
  styleUrls: [],
})
export class KardexComponent implements OnInit {
  public request: Observable<ProductStock[]>;
  public items: ProductStock[] = [];
  public filteredlist: ProductStock[] = [];

  constructor(private _inventory: InventoryService) {}

  ngOnInit(): void {
    this.request = this._inventory.getSotck().pipe(
      map((e) => {
        this.items = e;
        this.filteredlist = e;
        console.log("que viene:", this.filteredlist);
        return e;
      })
    );
  }

  public listenFilter(action: string): void {
    const type = action.split(":")[0];
    const param = action.split(":")[1];

    this.filteredlist = [];
    let list: ProductStock[] = [];

    if (type === "headquarter") {
      list = this.items.filter((e) => e.headquarter.name === param);
      this.filteredlist = new Array(...list);
    }

    if (type === "name") {
      list = this.items.filter((e) =>
        e.productName.toUpperCase().includes(param.toUpperCase())
      );
      this.filteredlist = list;
      return;
    }
  }
}
