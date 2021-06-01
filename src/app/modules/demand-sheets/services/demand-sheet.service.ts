import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DemandSheet } from '../models/demand-sheet.model';

@Injectable({
  providedIn: 'root'
})
export class DemandSheetService {

  constructor(
    private _http: HttpClient
  ) { }

  public getAll(): Observable<DemandSheet[]> {
    return this._http.get<JsonResp>(ApiRoutes.demandSheet.save).pipe(map((resp: JsonResp) => resp.data));
  }
}
