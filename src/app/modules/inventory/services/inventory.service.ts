import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductKardex } from '../models/product-kardex.model';
import { ProductStock } from '../models/product-stock.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private _http: HttpClient) { }

  public getSotck(): Observable<ProductStock[]> {
    return this._http.get<JsonResp>(ApiRoutes.inventory.getStock).pipe(map(resp => resp.data));
  }

  public getKardex(productKardex: string): Observable<ProductKardex> {
    return this._http.get<JsonResp>(ApiRoutes.inventory.getProdutKardex(productKardex)).pipe(map(resp => resp.data));
  }
}