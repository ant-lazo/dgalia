import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import apiRoutes from "assets/config/api-routes.json";
import { environment } from "environments/environment";
import { map } from "rxjs/operators";
import { JsonResp } from "../../../core/interfaces/json-resp.interface";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class UserServiceService {
  private baseUrl: string;

  constructor(private _http: HttpClient) {
    this.baseUrl = environment.apiUrl + apiRoutes.user.default;
  }

  public getList(): Observable<User[]> {
    return this._http.get<JsonResp>(this.baseUrl).pipe(
      map(result => result.data
      )
    );
  }

  /**
   * this method save new supply in db
   */
  public registerNewUser(data: any): Observable<JsonResp> {
    return this._http.post<JsonResp>(this.baseUrl, data);
  }

  /**
   * findByName returns a observable with list of supplies
   * @param name -> is a string with name tha should be match
   */
  public findByName(name: string): Observable<User[]> {
    return this._http
      .get<JsonResp>(this.baseUrl, { params: { name } })
      .pipe(map((resp) => resp.data));
  }

  public delete(id: number): Observable<JsonResp> {
    return this._http.delete<JsonResp>(this.baseUrl + "?id=" + id.toString());
  }

  public editUser(data: User): Observable<JsonResp> {
    return this._http.put<JsonResp>(this.baseUrl, data);
  }

  public generateCode(userCategoryId: string): Observable<string> {
    return this._http
      .get<JsonResp>(this.baseUrl + apiRoutes.item.generateCode, {
        params: { "user-category-id": userCategoryId },
      })
      .pipe(map((result) => result.data));
  }
}
