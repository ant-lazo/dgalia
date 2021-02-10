import * as apiRoutes from 'assets/config/api-routes.json';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Term } from '../models/term.interface';
import { JsonResp } from '../../../core/interfaces/json-resp.interface';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TermsService {

  constructor(
    private _http: HttpClient
  ) { }

  /**
   * getCompleteList
   * this method returns a observalbe with a complete list of terms on rest api
   */
  public getCompleteList(): Observable<Term[]> {
    return this._http.get<JsonResp>(environment.apiUrl + apiRoutes.term.default).pipe(map(resp => resp.data));
  }

  public delete(id:number): Observable<JsonResp> {
    return this._http.delete<JsonResp>(environment.apiUrl + apiRoutes.term.default + "?id="+id.toString());
  }

  public editTerm(data:Term): Observable<JsonResp> {
    return this._http.put<JsonResp>(environment.apiUrl + apiRoutes.term.default, data);
  }
  
  public registerNewTerm(data:Term): Observable<JsonResp> {
    return this._http.post<JsonResp>(environment.apiUrl + apiRoutes.term.default, data);
  }
}
