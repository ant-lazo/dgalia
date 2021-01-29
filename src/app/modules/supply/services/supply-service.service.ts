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

  constructor(
    private _http: HttpClient
  ) { }


  /**
   * this method returns a complete list of supplies registered
   */
  public getList(): Observable<Supply[]> {
    return this._http.get<JsonResp>(environment.apiUrl + apiRoutes.supply.default).pipe(map(result => {
      return result.data;
    }));
  }

  /**
   * this method save new supply in db
   */
  public registerNewSupply(data: any): Observable<JsonResp> {
    return this._http.post<JsonResp>(environment.apiUrl + apiRoutes.supply.default, data);
  }

  /**
   * findByName returns a observable with list of supplies 
   * @param name -> is a string with name tha should be match
   */
  public findByName(name: string): Observable<Supply[]> {
    return this._http.get<JsonResp>(environment.apiUrl + apiRoutes.supply.default, { params: { name } })
      .pipe(map(resp => resp.data));
  }


  public delete(id:number): Observable<JsonResp> {
    return this._http.delete<JsonResp>(environment.apiUrl + apiRoutes.supply.default + "?id="+id.toString());
  }

  public editSupply(data:Supply): Observable<JsonResp> {
    return this._http.put<JsonResp>(environment.apiUrl + apiRoutes.supply.default, data);
  }
}
