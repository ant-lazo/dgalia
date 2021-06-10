import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { ProviderService } from 'app/modules/provider/services/provider.service';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { combineLatest, Observable } from 'rxjs';

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
    // if (!products || !products.length || products.length <= 0) {
    //   this._toast.error(null, '¿y los productos? venga, selecciona uno');
    //   this.onCancel();
    //   return;
    // }

    this.products = products;
    this.setRequestData();
    this.setValues();
  }


  public onCancel(): void {
    this._dialogRef.close();
  }

}
