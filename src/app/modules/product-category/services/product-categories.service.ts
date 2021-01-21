import * as apiRoutes from 'assets/config/api-routes.json';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductCategory } from '../models/product-category.interface';
import { JsonResp } from '../../../core/interfaces/json-resp.interface';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {

  constructor(
    private _http: HttpClient
  ) { }

  /**
   * this thos return a observable with list of produtc categories, you have to make a suscribe
   */
  public getList(): Observable<ProductCategory> {
    return this._http.get<JsonResp>(environment.apiUrl + apiRoutes.product_category.default).pipe(map(result => result.data));
  }
}
