import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterOutputDialogComponent } from 'app/modules/inventory-movements/pages/outputs/components/register-output-dialog/register-output-dialog.component';
import { RegisterInputDialogComponent } from 'app/modules/inventory-movements/pages/inputs/components/register-input-dialog/register-input-dialog.component';

import { InventoryComponent } from 'app/modules/inventory/inventory.component';
import { ProductStock } from 'app/modules/inventory/models/product-stock.model';

@Component({
  selector: 'inventory-products_list-list_options',
  templateUrl: './list-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListOptionsComponent implements OnInit {

  public headquarterId: Number;

  constructor(
    private _bottomSheet: MatBottomSheetRef<ListOptionsComponent>,
    private _router: Router,
    private _dialog: MatDialog,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: ProductStock
  ) { }

  ngOnInit(): void {
    this.headquarterId = this.data.headquarter.id
  }

  public optionRedirect(option: string): void {
    this._bottomSheet.dismiss();
    switch (option) {
      case 'kardex':
        this._router.navigate([InventoryComponent.productKardex, this.data.productCode, this.headquarterId]);
        //this._router.navigate([InventoryComponent.productKardex,this.data.productCode],{ state: { productCode: this.data.productCode ,nameheadquareter:this.headquarterName} });
        break;
      case 'output':
        this.registerProductOutput();
        break;
      case 'input':
          this.registerProductInput();
          break;
      default:
        break;
    }
    this._bottomSheet.dismiss()
  }

  public registerProductOutput(): void {
    const dialogRef = this._dialog.open(RegisterOutputDialogComponent, {width: '70%', data: {productCode: this.data?.productCode}});
  }

  public registerProductInput(): void {
    const dialogRef = this._dialog.open(RegisterInputDialogComponent, {width: '70%', data: {productCode: this.data?.productCode}});
  }

}
