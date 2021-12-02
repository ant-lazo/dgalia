import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiRoutes } from "app/core/api/constants/api.routes";
import { JsonResp } from "app/core/interfaces/json-resp.interface";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { FilterInvoice } from "../models/filter-invoice";

@Injectable({
  providedIn: "root",
})
export class ProgramationService {
  constructor(private _http: HttpClient) {}

  public show(headquarterId: number): Observable<FilterInvoice[]> {
    return this._http
      .get<JsonResp>(ApiRoutes.reports.getProgramation(headquarterId))
      .pipe(map((result) => result.data));
  }

  public allProgramation(): Observable<FilterInvoice[]> {
    return this._http
      .get<JsonResp>(ApiRoutes.reports.getAllProgramation)
      .pipe(map((result) => result.data));
  }
}
