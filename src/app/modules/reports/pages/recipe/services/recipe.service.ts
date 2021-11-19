import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiRoutes } from "app/core/api/constants/api.routes";
import { JsonResp } from "app/core/interfaces/json-resp.interface";
import { Observable } from "rxjs";
import { FilterRecipe } from "../models/filter-recipe";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private _http: HttpClient
  ) { }

  public show(headquarterId: number): Observable<FilterRecipe[]> {
    return this._http.get<JsonResp>(ApiRoutes.reports.getRecipe(headquarterId)).pipe(map(result => result.data));
}

}
