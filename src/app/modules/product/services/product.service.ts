import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { ProductMapper } from './mappers/product.mapper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http: HttpClient
  ) { }

  public getlist(): Observable<Product[]> {
    return this._http.get<JsonResp>(ApiRoutes.product.getList).pipe(
      map((result: JsonResp) => {
        const mapper: ProductMapper = new ProductMapper();
        return result.data.map((e: any) => mapper.fromJson(e));
      }));
  }

  public findByCode(code: string): Observable<Product> {
    return this._http.get<JsonResp>(ApiRoutes.product.findByCode(code)).pipe(
      map((result: JsonResp) => {
        const mapper: ProductMapper = new ProductMapper();
        return mapper.fromJson(result.data);
      }));
  }
}
