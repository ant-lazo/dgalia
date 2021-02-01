import * as apiRoutes from 'assets/config/api-routes.json';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookingSchedule } from '../models/cooking-schedule.model';
import { JsonResp } from '../../../core/interfaces/json-resp.interface';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CookingScheduleService {

  constructor(
    private _http: HttpClient
  ) { }

  /**
   * getByMonth
   */
  public getByMonth(month: string, year: string): Observable<CookingSchedule[]> {
    return this._http.get<JsonResp>(
      environment.apiUrl + apiRoutes.cookin_schedule.default,
      { params: { month, year } }
    ).pipe(map(result => result.data));
  }
}
