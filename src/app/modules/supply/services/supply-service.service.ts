import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as apiRoutes from 'assets/config/api-routes.json';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import { JsonResp } from '../../../core/interfaces/json-resp.interface';
import { Supply } from '../models/supply';


@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  private baseUrl: string;

  constructor(
    private _http: HttpClient
  ) {
    this.baseUrl = environment.apiUrl + apiRoutes.supply.default;
  }

  /**
   * this method returns a complete list of supplies registered
   */
  public getList(): Observable<Supply[]> {
    return this._http.get<JsonResp>(this.baseUrl).pipe(map(result => {
      return result.data;
    }));
  }

  /**
   * this method save new supply in db
   */
  public registerNewSupply(data: any): Observable<JsonResp> {
    return this._http.post<JsonResp>(this.baseUrl, data);
  }

  /**
   * findByName returns a observable with list of supplies 
   * @param name -> is a string with name tha should be match
   */
  public findByName(name: string): Observable<Supply[]> {
    return this._http.get<JsonResp>(this.baseUrl, { params: { name } })
      .pipe(map(resp => resp.data));
  }


  public delete(id: number): Observable<JsonResp> {
    return this._http.delete<JsonResp>(this.baseUrl + "?id=" + id.toString());
  }

  public editSupply(data: Supply): Observable<JsonResp> {
    return this._http.put<JsonResp>(this.baseUrl, data);
  }

  public generateCode(productCategoryId: string): Observable<string> {
    return this._http.get<JsonResp>(this.baseUrl + apiRoutes.supply.generateCode,
      { params: { "product-category-id": productCategoryId } })
      .pipe(map(result => result.data))
  }
}
