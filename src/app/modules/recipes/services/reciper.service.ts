import * as apiRoutes from 'assets/config/api-routes.json';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResp } from '../../../core/interfaces/json-resp.interface';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class ReciperService {

  constructor(
    private _http: HttpClient
  ) { }

  public getAllRecipes(): Observable<Recipe[]> {
    return this._http.get<JsonResp>(environment.apiUrl + apiRoutes.recipe.default).pipe(map(result => result.data));
  }


}
