import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiRoutes } from "app/core/api/constants/api.routes";
import { JsonResp } from "app/core/interfaces/json-resp.interface";
import { Observable } from "rxjs";
import { RegisterPrgFormModel } from "../models/register-form.model";



@Injectable()
export class RegisterCookingScheduleService {

    constructor(
        private _http: HttpClient
    ) { }

    public run(data: RegisterPrgFormModel): Observable<JsonResp> {
        return this._http.post<JsonResp>(ApiRoutes.cookingSchedule.save, data);
    }
}