import apiRoutes from 'assets/config/api-routes.json';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from '../models/class.model';
import { JsonResp } from '../../../core/interfaces/json-resp.interface';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(
    private _http: HttpClient
  ) { }


  /**
   * getList
   */
  public getList(): Observable<Class[]> {
    return this._http.get<JsonResp>(environment.apiUrl + apiRoutes.class.default).pipe(map(result => result.data));
  }
}
