import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductKardex } from '../../models/product-kardex.model';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styles: [
  ]
})
export class KardexComponent implements OnInit {

  public request: Observable<ProductKardex>;

  constructor(
    private _inventory: InventoryService,
    private _activatedRoute: ActivatedRoute
  ) { }

  private get productCode(): string {
    return this._activatedRoute.snapshot.params.productCode;
  }

  ngOnInit(): void {
    this.request = this._inventory.getKardex(this.productCode);
  }

}
