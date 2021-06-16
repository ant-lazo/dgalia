import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DocumentType } from '../models/document-type';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  constructor(
    private _http: HttpClient
  ) { }

  public getAll(): Observable<DocumentType[]> {
    return this._http.get<JsonResp>(ApiRoutes.documentType.getAll).pipe(map(resp => resp.data));
  }
}
