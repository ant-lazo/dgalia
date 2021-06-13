import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { DocumentTypeService } from 'app/modules/document-types/services/document-type.service';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { ProductCategoriesService } from 'app/modules/product-category/services/product-categories.service';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Provider } from '../../models/provider';

import { ProviderComponent } from '../../provider.component';
import { ProviderService } from '../../services/provider.service';
import { RqRegisterProvider } from '../register/models/rq-register-provider';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public rqData: Observable<any[]>;
  public rqRegisterProvider: RqRegisterProvider;

  constructor(
    private _documentTypes: DocumentTypeService,
    private _productCategories: ProductCategoriesService,
    private _headquarter: HeadquartesService,
    private _providers: ProviderService,
    private _appNtf: AppNotificationsService,
    private _activatedRoute: ActivatedRoute,
    private _location: Location,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.setData();
  }

  private setData(): void {
    this.rqData = combineLatest([
      this._documentTypes.getAll(),
      this._headquarter.getCompleteList(),
      this._productCategories.getList(),
      this._providers.findByCode(this.providerCode)
    ]);
  }

  private get providerCode(): string {
    const code: string = this._activatedRoute.snapshot.params.code;
    if (!code) this._location.back();
    return code;
  }

  public setForm(form: RqRegisterProvider): void {
    this.rqRegisterProvider = form;
  }

  public onUpdatePressed(): void {
    console.log('here');
    
    // const request: Observable<JsonResp> = this._providers.save(this.rqRegisterProvider);

    // request.subscribe((resp: JsonResp) => {
    //   this._appNtf.registerSuccess(null, `Se ha registrado exitosamente el proveedor con el código ${resp.data}`);
    //   this._router.navigate([ProviderComponent.listRoute]);
    // });
  }

  public onCancel(): void {
    this._router.navigate([ProviderComponent.listRoute]);
  }

}
