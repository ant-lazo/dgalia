import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  constructor(
    private _http: HttpClient
  ) { }

  public getNextCode(): Observable<string> {
    return this._http.get<JsonResp>(ApiRoutes.purchaseOrder.getNextCode).pipe(map(resp => resp.data));
  }
}
