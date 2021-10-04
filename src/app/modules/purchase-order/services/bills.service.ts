import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import { Product } from '../models/product.model';



@Injectable({
  providedIn: 'root'
})
export class BillsService {

  constructor(
    private _http: HttpClient
  ) { }
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
}
