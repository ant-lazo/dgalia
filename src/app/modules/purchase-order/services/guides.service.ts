import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { Observable } from 'rxjs';
import { ReferralGuide } from '../models/referralGuide.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class GuidesService {
  
    //private baseUrl: string;
  
    constructor(
      private _http: HttpClient
    ) {
      //this.baseUrl = environment.apiUrl + apiRoutes.bill.default;
    }

    public registerGuide(data: any): Observable<JsonResp>{
        return this._http.post<JsonResp>(ApiRoutes.guide.save, data);
      }
    
    /*public getAll(): Observable<ReferralGuide[]> {
        return this._http.get<JsonResp>(ApiRoutes.guide.getAll).pipe(map(resp => resp.data));
      }*/

    public getAll(): Observable<any> {
        return this._http.get<JsonResp>(ApiRoutes.guide.getAll);
      }
    
  }