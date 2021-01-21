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
export class SupplyServiceService {

  constructor(
    private _http: HttpClient
  ) { }


  /**
   * this methos returns a complete list of supplies registered
   */
  public getList(): Observable<Supply[]> {
    return this._http.get<JsonResp>(environment.apiUrl + apiRoutes.supply.default).pipe(map(result => {
      return result.data;
    }));
  }
}
