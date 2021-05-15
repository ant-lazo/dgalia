import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Warehouse } from '../models/warehouse.model';
import { WarehouseMapper } from './mappers/warehouse.mapper';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(
    private _http: HttpClient
  ) { }

  public getList(): Observable<Warehouse[]> {
    return this._http.get<JsonResp>(ApiRoutes.warehouse.getList).pipe(map((resp: JsonResp) => {
      const mapper = new WarehouseMapper()
      return resp.data.map((e: Warehouse) => mapper.fromJson(e));
    }));

  }
}
