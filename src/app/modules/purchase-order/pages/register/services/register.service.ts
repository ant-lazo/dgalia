import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { RqPoSelectedItem } from '../models/po-selected-item.model';

@Injectable()
export class RegisterService {

  public currentProducts: BehaviorSubject<RqPoSelectedItem[]> = new BehaviorSubject([]);

  constructor() { }

  public addProduct(item: RqPoSelectedItem): void {
    const products: RqPoSelectedItem[] = this.currentProducts.value ?? [];
    const productFounded: RqPoSelectedItem = products.find(e => e.localId === item.localId);
    if (!productFounded) products.push(item);
    this.currentProducts.next(products);
  }

  public deletePorduct(item: RqPoSelectedItem): void {
    const products: RqPoSelectedItem[] = this.currentProducts.value ?? [];
    const productFounded: RqPoSelectedItem = products.find(e => e.localId === item.localId);
    if (productFounded) {
      const index: number = products.indexOf(item);
      if (index !== -1) products.splice(index, 1);
    }
    this.currentProducts.next(products);
  }
}
