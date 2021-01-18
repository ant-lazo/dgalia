import * as apiRoutes from 'assets/config/api-routes.json';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeasuredUnit } from '../models/measured-unit.model';
import { JsonResp } from '../../../core/interfaces/json-resp.interface';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeasuredUnitService {

  constructor(
    private _http: HttpClient
  ) { }

  public getGetList(): Observable<MeasuredUnit[]> {
    return this._http.get<JsonResp>(environment.apiUrl + apiRoutes.measured_unit.default).pipe(map(resp => {
      return MeasuredUnit.fromListFromJson(resp.data);
    }))
  }
}
