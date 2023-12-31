import apiRoutes from 'assets/config/api-routes.json';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.interface';
import { JsonResp } from '../../../core/interfaces/json-resp.interface';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private _http: HttpClient
  ) { }

  /**
   * getCourseList
   * get complete course list from rest-api
   */
  public getCourseList(): Observable<Course[]> {
    return this._http.get<JsonResp>(environment.apiUrl + apiRoutes.course.default).pipe(map(resp => resp.data));
  }

  public delete(id: number): Observable<JsonResp> {
    return this._http.delete<JsonResp>(environment.apiUrl + apiRoutes.course.default + "?id=" + id.toString());
  }

  public editCourse(data: Course): Observable<JsonResp> {
    return this._http.put<JsonResp>(environment.apiUrl + apiRoutes.course.default, data);
  }

  public registerNewCourse(data: Course): Observable<JsonResp> {
    return this._http.post<JsonResp>(environment.apiUrl + apiRoutes.course.default, data);
  }
}
