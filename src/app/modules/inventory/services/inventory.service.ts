import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductStock } from '../models/product-stock.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private _http: HttpClient) { }

  public getSotck(): Observable<ProductStock[]> {
    return this._http.get<JsonResp>(ApiRoutes.inventory.getStock).pipe(map(resp => resp.data));
  }
}
