import { Component, OnInit } from '@angular/core';
import { ApiRoutes } from 'app/core/api/constants/api.routes';
import { Observable } from 'rxjs';
import { FilterInvoice } from './models/filter-invoice';
import { InvoiceFormModel } from './models/register-form';
import { PendingPaymentService } from './services/pending-payment.service';

@Component({
  selector: 'app-pending-payment',
  templateUrl: './pending-payment.component.html',
  styleUrls: []
})
export class PendingPaymentComponent implements OnInit {

  public request: Observable<FilterInvoice[]>;
  public form: InvoiceFormModel;
  invoicefilter : FilterInvoice[] = [];

  constructor(
    private _invoice: PendingPaymentService
  ) { }

  ngOnInit(): void {
    this.setDefaultData();
  }

  public listenFormChanges(form: InvoiceFormModel): void {
    this.form = form;
  }

  public onShowMethod(): void {
    this.setRecipe();
    console.log("FilterInvoice", this.invoicefilter)
  }

  public onDownloadMethod(): void {
    location.href = ApiRoutes.reports.getPendingPaymentDownload(this.form.headquarterId);
  }

  public setRecipe(): void{
    this.request = this._invoice.show(this.form.headquarterId);
    this.request.subscribe(p => {
      this.invoicefilter = p;
    });
  }
  private setDefaultData(): void {
    this.request = this._invoice.show(0);
    this.request.subscribe(p => {
      this.invoicefilter = p;
    });
  }

}
