import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'app/modules/product/models/product.model';
import { ProductService } from 'app/modules/product/services/product.service';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { Observable } from 'rxjs';

import { RqPoSelectedItem } from '../../models/po-selected-item.model';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'purchase_order-register-selec-product-dialog',
  templateUrl: './select-product-dialog.component.html',
})
export class SelectProductDialogComponent implements OnInit {

  public productList: Product[] = [];
  private completeProductList: Product[] = [];
  public selectedProductList: Product[] = [];
  public productSelected: RqPoSelectedItem;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { supplyCode: string },
    private _dialogRef: MatDialogRef<SelectProductDialogComponent>,
    private _products: ProductService,
    private _register: RegisterService,
    private _toast: AppNotificationsService
  ) { }

  ngOnInit(): void {
    this.setProductList();
  }

  public onClose(): void {
    this._dialogRef.close();
  }

  public listenSearchBoxParam(value: string): void {
    const products: Product[] = this.completeProductList.filter(e => e.name.toUpperCase().includes(value.toUpperCase()));
    this.selectedProductList = products;
  }

  public selectProduct(product: Product): void {
    this.productSelected = new RqPoSelectedItem({
      productCode: product.code,
      productIgv: product.igv,
      productName: product.name,
      productQuantity: 0,
      productUnitPrice: product.priceList,
      requiredMeasuredUnitName: null,
      requiredQuantity: null,
      supplyCode: product.supplyCode,
      supplyName: product.supplyName ?? 'N/A',
      productMuName: product.measureUnit.name,
      productCategoryName: product.category.name,
    });
  }

  private setProductList(): void {
    if (this.data?.supplyCode) {
      this.setProductListBySupply();
    } else {
      this.setCompleteProductList();
    }
  }

  private setProductListBySupply(): void {

    const request: Observable<Product[]> = this._products.findBySupplyCode(this.data.supplyCode);
    request.subscribe((list: Product[]) => {
      this.selectedProductList = list;
    });
  }

  private setCompleteProductList(): void {
    const request: Observable<Product[]> = this._products.getlist();
    request.subscribe((list: Product[]) => {
      this.productList = list;
      this.completeProductList = list;
    });
  }

  public addProduct(): void {
    if (this.productSelected.productQuantity === null || this.productSelected.productQuantity <= 0) {
      this._toast.error(null, 'Deberias ingresar una cantidad mayor a cero');
      return;
    }

    if (this.data?.supplyCode) {
      const pdtStd: RqPoSelectedItem = this.productSelected;
      const founded: RqPoSelectedItem = this._register.findbySupplyCode(this.data.supplyCode);
      const newproduct = new RqPoSelectedItem({
        productCategoryName: pdtStd.productCategoryName,
        productCode: pdtStd.productCode,
        productIgv: pdtStd.productIgv,
        productMuName: pdtStd.productMuName,
        productName: pdtStd.productName,
        productQuantity: pdtStd.productQuantity,
        productUnitPrice: pdtStd.productUnitPrice,
        requiredMeasuredUnitName: founded.requiredMeasuredUnitName,
        requiredQuantity: founded.requiredQuantity,
        supplyCode: founded.supplyCode,
        supplyName: founded.supplyName,
      });

      this._register.updateBySuplyCode(newproduct);
      this.onClose();
    } else {
      this._register.addProduct(this.productSelected);
      this.onClose();
    }
  }

  public setProductSelectedTotal(): void {
    const total: number = (this.productSelected.productQuantity * this.productSelected.productUnitPrice) + this.productSelected.productIgv;
    this.productSelected.total = Number((total).toFixed(2));

  }

}
