import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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

  constructor(
    private _inventory: InventoryService
  ) { }

  ngOnInit(): void {
    this.request = this._inventory.getSotck();
  }

}
