import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { Provider } from 'app/modules/provider/models/provider';
import { ProviderService } from 'app/modules/provider/services/provider.service';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { combineLatest, Observable } from 'rxjs';
import { PoResumeModalRespData } from '../../models/po-resume-modal-data.model';

import { RqPoSelectedItem } from '../../models/po-selected-item.model';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'purchase_order-register-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public requestData: Observable<any[]>;
  public total: number;
  public subTotal: number;
  public igv: number;
  public products: RqPoSelectedItem[] = [];
  private provider: Provider;
  private headquarter: Headquarter;
  public comments: string;


  constructor(
    private _dialogRef: MatDialogRef<ResumeComponent>,
    private _headquarters: HeadquartesService,
    private _providers: ProviderService,
    private _registerService: RegisterService,
    private _toast: AppNotificationsService
  ) { }

  ngOnInit(): void {
    this.setProducts();
  }

  private setRequestData(): void {
    this.requestData = combineLatest([
      this._headquarters.getCompleteList(),
      this._providers.getAll()
    ]);
  }

  private setValues(): void {
    this.total = this.products.reduce((a, c) => a + c.total, 0);
    this.igv = this.products.reduce((a, c) => a + c.productIgv, 0);
    this.subTotal = this.total - this.igv;
  }

  private setProducts(): void {
    const products = this._registerService.currentProducts.value;
    if (!products || !products.length || products.length <= 0) {
      this._toast.error(null, '¿y los productos? venga, selecciona uno');
      this.onCancel();
      return;
    }

    this.products = products;
    this.setRequestData();
    this.setValues();
  }

  public setHeadquarter(headquarter: Headquarter) {
    this.headquarter = headquarter;    
  }

  public setProvider(provider: Provider) {
    this.provider = provider;
  }

  public onSave(draft: boolean): void {
    if (this.headquarter == null || this.provider == null) {
      this._toast.error(null, 'Te falta seleccionar algunos datos, o si quieres cancela');
      return;
    }
    
    const rq: PoResumeModalRespData = new PoResumeModalRespData({
      commnets: this.comments ?? 'Sin comentarios',
      headquarter: this.headquarter,
      provider: this.provider,
      registrationType: draft ? 'draft' : 'register',
    });

    this._dialogRef.close(rq);
  }

  public onCancel(): void {
    this._dialogRef.close();
  }

}
