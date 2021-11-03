import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputsService {
  _http: any;

  constructor(
    private_http: HttpClient
  ) {}


// public saveProduct(data: any): Observable<JsonResp> {
//   return this._http.post<JsonResp>(ApiRoutes.inputs.save, data);
// }
}


