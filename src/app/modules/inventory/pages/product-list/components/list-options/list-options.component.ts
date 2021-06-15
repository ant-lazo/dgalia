import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { InventoryComponent } from 'app/modules/inventory/inventory.component';
import { ProductStock } from 'app/modules/inventory/models/product-stock.model';

@Component({
  selector: 'inventory-products_list-list_options',
  templateUrl: './list-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListOptionsComponent implements OnInit {

  constructor(
    private _bottomSheet: MatBottomSheetRef<ListOptionsComponent>,
    private _router: Router,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: ProductStock
  ) { }

  ngOnInit(): void {
  }

  public optionRedirect(option: string): void {
    this._bottomSheet.dismiss();
    switch (option) {
      case 'kardex':
        this._router.navigate([InventoryComponent.productKardex, this.data.productCode]);
        break;
      default:
        break;
    }
    this._bottomSheet.dismiss()
  }

}
