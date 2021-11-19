import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiRoutes } from "app/core/api/constants/api.routes";
import { JsonResp } from "app/core/interfaces/json-resp.interface";
import { Observable } from "rxjs";
import { FilterProduct } from "../models/filter-products";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(
    private _http: HttpClient
  ) { }

  public show(start: string, end: string, headquarterId: number): Observable<FilterProduct[]> {
    return this._http.get<JsonResp>(ApiRoutes.reports.getRanking(start,end,headquarterId)).pipe(map(result => result.data));
}

}
