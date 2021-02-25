import * as apiRoutes from 'assets/config/api-routes.json';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResp } from '../../../core/interfaces/json-resp.interface';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import { Recipe } from '../models/recipe.model';
import { RegisterRecipeForm } from '../models/register-recipe-form.model';
import { EditRecipeForm } from '../models/edit-recipe-form.model';

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

  public findById(id: number): Observable<Recipe> {
    return this._http.get<JsonResp>(environment.apiUrl + apiRoutes.recipe.default+"?id="+id)
      .pipe(map(resp => 
        resp.data
      ));
  }
  
  public save(form: RegisterRecipeForm): Observable<JsonResp> {
    return this._http.post<JsonResp>(environment.apiUrl + apiRoutes.recipe.default, form);
  }


  public delete(id:number): Observable<JsonResp> {
    return this._http.delete<JsonResp>(environment.apiUrl + apiRoutes.recipe.default + "?id="+id.toString());
  }

  public editRecipe(data:EditRecipeForm): Observable<JsonResp> {
    return this._http.put<JsonResp>(environment.apiUrl + apiRoutes.recipe.default, data);
  }
}