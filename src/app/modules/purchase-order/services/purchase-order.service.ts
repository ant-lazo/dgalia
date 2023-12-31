import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PurchaseOrder } from '../models/ purchase-order.model';


@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  constructor(
    private _http: HttpClient
  ) { }

  public getNextCode(demandsheetCode?: string): Observable<string> {
    return this._http.get<JsonResp>(ApiRoutes.purchaseOrder.getNextCode(demandsheetCode))
      .pipe(map(resp => resp.data));
  }

  public getAll(): Observable<PurchaseOrder[]> {
    return this._http.get<JsonResp>(ApiRoutes.purchaseOrder.getAll).pipe(map(resp => resp.data));
  }

  public findbyCode(code: string): Observable<PurchaseOrder> {
    return this._http.get<JsonResp>(ApiRoutes.purchaseOrder.findByCode(code)).pipe(map(resp => resp.data));
  }

  public updateStatus(stsCode: string, code: string, comments: string): Observable<JsonResp> {
    return this._http.patch<JsonResp>(ApiRoutes.purchaseOrder.updateStatus, { code, status_code: stsCode, comments });
  }

  public complete(purchaseOrderCode: string, comments: string): Observable<JsonResp> {
    return this._http.patch<JsonResp>(ApiRoutes.purchaseOrder.complete, { code: purchaseOrderCode, comments });
  }

  public sendEmailbyCode(code: string, data:any): Observable<any> {
    return this._http.post(ApiRoutes.purchaseOrder.sendEmail(code),data);
  }

  public pdfDownloadPurchaseOrder(code:string): Observable<any> {
    let header = new HttpHeaders({
      'Content-Type':'application/pdf',
      'Content-disposition': 'attachment; filename= filename'
    });
    return this._http.get(ApiRoutes.purchaseOrder.pdfDownload(code),{ headers: header })
    //return this._http.get(ApiRoutes.purchaseOrder.pdfDownload(code))
  }
}
