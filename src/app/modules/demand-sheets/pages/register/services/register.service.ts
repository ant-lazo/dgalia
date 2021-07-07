import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiRoutes } from "app/core/api/constants/api.routes";
import { JsonResp } from "app/core/interfaces/json-resp.interface";
import { Observable } from "rxjs";
import { RqDemandSheetRegister } from "../models/demand-sheet-form.model";

@Injectable()
export class RegisterDemandSheetService {

    constructor(
        private _http: HttpClient
    ) { }

    public execute(request: RqDemandSheetRegister): Observable<JsonResp> {
        return this._http.post<JsonResp>(ApiRoutes.demandSheet.save, request);
    }
}