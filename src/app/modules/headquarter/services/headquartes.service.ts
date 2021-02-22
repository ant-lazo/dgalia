import * as apiRoutes from 'assets/config/api-routes.json';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Headquarter } from '../models/headquarter.model';
import { JsonResp } from '../../../core/interfaces/json-resp.interface';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeadquartesService {

  constructor(
    private _http: HttpClient
  ) { }

  /**
   * getCompleteList
   * return a observable wiht complete list of headwuarters from rest api
   */
  public getCompleteList(): Observable<Headquarter[]> {
    return this._http.get<JsonResp>(environment.apiUrl + apiRoutes.headquarter.default).pipe(map(resp => resp.data));
  }

  public delete(id:number): Observable<JsonResp> {
    return this._http.delete<JsonResp>(environment.apiUrl + apiRoutes.headquarter.default + "?id="+id.toString());
  }

  public editHeadquarter(data:Headquarter): Observable<JsonResp> {
    return this._http.put<JsonResp>(environment.apiUrl + apiRoutes.headquarter.default, data);
  }
  
  public registerNewHeadquarter(data:Headquarter): Observable<JsonResp> {
    return this._http.post<JsonResp>(environment.apiUrl + apiRoutes.headquarter.default, data);
  }
}
