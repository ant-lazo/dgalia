import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import { Product } from '../models/product.model';
//imports omar
import { environment } from 'environments/environment';
import  apiRoutes from 'assets/config/api-routes.json';


@Injectable({
  providedIn: 'root'
})
export class BillsService {

  //private baseUrl: string;

  constructor(
    private _http: HttpClient
  ) {
    //this.baseUrl = environment.apiUrl + apiRoutes.bill.default;
  }

  public getlistStatus(): Observable<any> {
    return this._http.get<JsonResp>(ApiRoutes.bills.getListStatus)
    
  }
  public getlist(): Observable<any> {
    return this._http.get<JsonResp>(ApiRoutes.bills.getList)
    //.pipe(
    //  map((result: JsonResp) => {
       // const mapper: ProductMapper = new ProductMapper();
      //  return result.data.map((e: any) => mapper.fromJson(e));
     // }));
  }

  public registerNewBill(data: any): Observable<JsonResp> {
    return this._http.post<JsonResp>(ApiRoutes.bills.post, data);
  }

  public updatePaid(data: any): Observable<JsonResp>{
    return this._http.put<JsonResp>(ApiRoutes.bills.put, data);
  }
}
