import apiRoutes from 'assets/config/api-routes.json';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResp } from '../../../core/interfaces/json-resp.interface';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import { SubRecipe } from '../models/sub-recipe.model';
import { RegisterSubRecipeForm } from '../models/register-sub-recipe-form.model';
import { EditSubRecipeForm } from '../models/edit-sub-recipe-form.model';
import { ApiRoutes } from 'app/core/api/constants/api.routes';

@Injectable({
  providedIn: 'root'
})
export class SubReciperService {

  constructor(
    private _http: HttpClient
  ) { }

  public getAllSubRecipes(): Observable<SubRecipe[]> {
    return this._http.get<JsonResp>(environment.apiUrl + apiRoutes.sub_recipe.default).pipe(map(result => result.data));
  }

  public findById(id: number): Observable<SubRecipe> {
    return this._http.get<JsonResp>(environment.apiUrl + apiRoutes.sub_recipe.default + "?id=" + id)
      .pipe(map(resp =>
        resp.data
      ));
  }

  public findByName(name: string): Observable<SubRecipe[]> {
    return this._http.get<JsonResp>(ApiRoutes.subRecipes.findByName(name)).pipe(map(resp =>
      resp.data
    ));
  }

  public save(form: RegisterSubRecipeForm): Observable<JsonResp> {
    return this._http.post<JsonResp>(environment.apiUrl + apiRoutes.sub_recipe.default, form);
  }


  public delete(id: number): Observable<JsonResp> {
    return this._http.delete<JsonResp>(environment.apiUrl + apiRoutes.sub_recipe.default + "?id=" + id.toString());
  }

  public editSubRecipe(data: EditSubRecipeForm): Observable<JsonResp> {
    return this._http.put<JsonResp>(environment.apiUrl + apiRoutes.sub_recipe.default, data);
  }

  public generateCode(): Observable<string> {
    const url = environment.apiUrl + apiRoutes.sub_recipe.next_code;
    return this._http.get<JsonResp>(url).pipe(map((resp: JsonResp) => resp.data));
  }
}
