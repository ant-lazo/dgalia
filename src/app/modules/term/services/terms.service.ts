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
}
