import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { PoRqRegisterForm } from '../models/po-rq-register-form.model';

import { RqPoSelectedItem } from '../models/po-selected-item.model';

@Injectable()
export class RegisterService {

  public currentProducts: BehaviorSubject<RqPoSelectedItem[]> = new BehaviorSubject([]);

  constructor(
    private _http: HttpClient
  ) { }

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

  public run(form: PoRqRegisterForm): Observable<JsonResp> {
    return this._http.post<JsonResp>(ApiRoutes.purchaseOrder.save, form);
  }
}
