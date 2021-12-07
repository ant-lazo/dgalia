import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductKardex } from '../models/product-kardex.model';
import { ProductStock } from '../models/product-stock.model';
import { ProductStockValoration } from 'app/modules/reports/pages/valoration/models/product-stock-valoration';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private _http: HttpClient) { }

  public getSotck(): Observable<ProductStock[]> {
    return this._http.get<JsonResp>(ApiRoutes.inventory.getStock).pipe(map(resp => resp.data));
  }

  public getSotckValoration(headquarterId: number): Observable<ProductStockValoration[]> {
    return this._http.get<JsonResp>(ApiRoutes.inventory.getStockValoration(headquarterId)).pipe(map(resp => resp.data));
  }

  public getKardex(productKardex: string): Observable<ProductKardex> {
    return this._http.get<JsonResp>(ApiRoutes.inventory.getProdutKardex(productKardex)).pipe(map(resp => resp.data));
  }

  public getKardexByHeadquarter(productKardex: string, headquarterId: Number): Observable<ProductKardex> {
    return this._http.get<JsonResp>(ApiRoutes.inventory.getProdutKardexByHeadquarter(productKardex, headquarterId)).pipe(map(resp => resp.data));
  }

  public postRemoveMerchandise(data:any){
    return this._http.post<JsonResp>(ApiRoutes.inventory.postRemoveMerchandise,data)
  }

  public getValorationByHeadquarter(headquarterId: number): Observable<ProductStockValoration[]> {
    return this._http.get<JsonResp>(ApiRoutes.inventory.getStockValoration(headquarterId)).pipe(map(resp => resp.data));
  }
}
