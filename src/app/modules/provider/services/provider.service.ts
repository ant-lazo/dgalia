import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Provider } from '../models/provider';
import { RqRegisterProvider } from '../pages/register/models/rq-register-provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(
    private _http: HttpClient
  ) { }

  public getAll(): Observable<Provider[]> {
    return this._http.get<JsonResp>(ApiRoutes.provider.getAll).pipe(map(result => result.data));
  }

  public save(newProvider: RqRegisterProvider): Observable<JsonResp> {
    return this._http.post<JsonResp>(ApiRoutes.provider.save, newProvider);
  }

  public update(newProvider: RqRegisterProvider): Observable<JsonResp> {
    return this._http.put<JsonResp>(ApiRoutes.provider.update, newProvider);
  }

  public findByCode(code: string): Observable<Provider> {
    return this._http.get<JsonResp>(ApiRoutes.provider.findByCode(code)).pipe(map(resp => resp.data));
  }
}
