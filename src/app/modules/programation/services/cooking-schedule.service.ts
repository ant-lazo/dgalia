import apiRoutes from 'assets/config/api-routes.json';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookingSchedule } from '../models/cooking-schedule.model';
import { JsonResp } from '../../../core/interfaces/json-resp.interface';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import { CookingScheduleRegisterForm } from '../models/cooking-schedule-register-form.model';
import moment from 'moment';
import { CookingScheduleUpdateForm } from '../models/update-form.model';
import { CookingScheduleResumen } from '../models/cooking-schedule-resumen.model';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { CookingScheduleResumeMapper } from './mappers/cooking-schedule-resume.mapper';

@Injectable({
  providedIn: 'root'
})
export class CookingScheduleService {

  private baseUrl: string;

  constructor(
    private _http: HttpClient
  ) {
    this.baseUrl = environment.apiUrl + apiRoutes.cookin_schedule.default;
  }

  public getByMonth(month: string, year: string): Observable<CookingSchedule[]> {
    return this._http.get<JsonResp>(
      this.baseUrl,
      { params: { month, year } }
    ).pipe(map(result => result.data));
  }

  public getByRange(start: Date, end: Date): Observable<CookingSchedule[]> {
    return this._http.get<JsonResp>(
      this.baseUrl + "?from=" + moment(start).format('yyyy-MM-DD') + "&to=" + moment(end).format('yyyy-MM-DD')
    ).pipe(map(result => result.data));
  }

  public getAll(): Observable<CookingSchedule[]> {
    return this._http.get<JsonResp>(
      this.baseUrl
    ).pipe(map(result => result.data));
  }

  public register(body: CookingScheduleRegisterForm): Observable<JsonResp> {
    return this._http.post<JsonResp>(this.baseUrl, body);
  }

  public getById(id: string): Observable<CookingSchedule> {
    return this._http.get<JsonResp>(this.baseUrl, { params: { id } })
      .pipe(map(resp => resp.data));
  }

  public getByCode(code: string): Observable<CookingSchedule> {
    return this._http.get<JsonResp>(ApiRoutes.cookingSchedule.findByCode(code))
      .pipe(map(resp => resp.data));
  }

  public delete(id: number): Observable<JsonResp> {
    return this._http.delete<JsonResp>(this.baseUrl, { params: { id: id.toString() } });
  }

  public update(cookingschedule: CookingScheduleUpdateForm): Observable<JsonResp> {
    return this._http.put<JsonResp>(this.baseUrl, cookingschedule);
  }

  public getResume(code: string): Observable<CookingScheduleResumen[]> {
    return this._http.get<JsonResp>(ApiRoutes.cookingSchedule.getResume(code)).pipe(map((resp: JsonResp) => {
      const mapper: CookingScheduleResumeMapper = new CookingScheduleResumeMapper();
      return resp.data.map(e => mapper.fromJson(e));
    }));
  }
}
