import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiRoutes } from "app/core/api/constants/api.routes";

import { FilterInvoice } from "./models/filter-invoice";
import { PendingPaymentService } from "./services/pending-payment.service";
import { InvoiceFormModel } from "./models/register-form";
import { ShowFormHelper } from './helpers/show-form-pending-payment.helpers';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';

@Component({
  selector: "app-pending-payment",
  templateUrl: "./pending-payment.component.html",
  styleUrls: [],
})
export class PendingPaymentComponent implements OnInit {
  public request: Observable<FilterInvoice[]>;
  public items: FilterInvoice[] = [];
  public filteredlist: FilterInvoice[] = [];
  public form: InvoiceFormModel;

  constructor(
    private _invoice: PendingPaymentService,
    private _helper: ShowFormHelper,
    private _notifications: AppNotificationsService
    ) {}

  ngOnInit(): void {
    this.setDefaultData();
    /*this.request = this._invoice.allPendingPayment().pipe(
      map((e) => {
        this.items = e;
        this.filteredlist = e;
        console.log("que viene:", this.filteredlist);
        return e;
      })
    );*/
  }

  public onShowMethod(): void {
    const error: string = this._helper.validateFormData(this.form);
    if (error != '') {
      this._notifications.error(null, error);
      return;
    }
    this.setPendingPayment();
  }

  public listenFormChanges(form: InvoiceFormModel): void {
    this.form = form;
  }

  /*public onShowMethod(): void {
    this.setRecipe();
    console.log("FilterInvoice", this.invoicefilter)
  }*/

  public setPendingPayment(): void{
    this.request = this._invoice.showPendingPaymentByHeadquarter(this.form.headquarterId);
    this.request.subscribe(p => {
      this.filteredlist = p;
      console.log("debe venir", this.filteredlist)
    });
  }

  private setDefaultData(): void {
    this.request = this._invoice.showPendingPaymentByHeadquarter(0);
    this.request.subscribe(p => {
      this.filteredlist = p;
    });
  }

  public onDownloadMethod(): void {

    const error: string = this._helper.validateFormData(this.form);
    if (error != '') {
      this._notifications.error(null, error);
      return;
    }

    location.href = ApiRoutes.reports.getPendingPaymentDownload(
      this.form.headquarterId
    );
  }

  

  

  /*public listenFormChanges(action: string): void {
    console.log("aver: ",action);
    const type = action.split(":")[0];
    const param = action.split(":")[1];

    this.filteredlist = [];
    let list: FilterInvoice[] = [];

    if (type === "headquarter") {
      list = this.items.filter((e) => e.purchaseOrder.headquarter.name === param);
      
      this.filteredlist = new Array(...list);
    }*/

    /*if (type === "name") {
      list = this.items.filter((e) =>
        e.purchaseOrder.headquarter.name.toUpperCase().includes(param.toUpperCase())
      );
      this.filteredlist = list;
      return;
    }*/
  /*}*/

}
