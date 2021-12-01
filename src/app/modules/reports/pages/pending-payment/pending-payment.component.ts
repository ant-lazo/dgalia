import { Component, OnInit } from "@angular/core";
import { ApiRoutes } from "app/core/api/constants/api.routes";
import { Observable } from "rxjs";
import { FilterInvoice } from "./models/filter-invoice";
import { InvoiceFormModel } from "./models/register-form";
import { PendingPaymentService } from "./services/pending-payment.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-pending-payment",
  templateUrl: "./pending-payment.component.html",
  styleUrls: [],
})
export class PendingPaymentComponent implements OnInit {
  public request: Observable<FilterInvoice[]>;
  public form: InvoiceFormModel;
  public items: FilterInvoice[] = [];
  public filteredlist: FilterInvoice[] = [];

  constructor(private _invoice: PendingPaymentService) {}

  ngOnInit(): void {
    //this.setDefaultData();
    this.request = this._invoice.allPendingPayment().pipe(
      map((e) => {
        this.items = e;
        this.filteredlist = e;
        console.log("que viene:", this.filteredlist);
        return e;
      })
    );
  }

  /*public listenFormChanges(form: InvoiceFormModel): void {
    this.form = form;
  }*/

  /*public onShowMethod(): void {
    this.setRecipe();
    console.log("FilterInvoice", this.invoicefilter)
  }*/

  public onDownloadMethod(): void {
    location.href = ApiRoutes.reports.getPendingPaymentDownload(
      this.form.headquarterId
    );
  }

  /*public setRecipe(): void{
    this.request = this._invoice.show(this.form.headquarterId);
    this.request.subscribe(p => {
      this.invoicefilter = p;
    });
  }*/

  /*private setDefaultData(): void {
    this.request = this._invoice.show(0);
    this.request.subscribe(p => {
      this.invoicefilter = p;
    });
  }*/

  public listenFormChanges(action: string): void {
    console.log("aver: ",action);
    const type = action.split(":")[0];
    const param = action.split(":")[1];

    this.filteredlist = [];
    let list: FilterInvoice[] = [];

    if (type === "headquarter") {
      list = this.items.filter((e) => e.purchaseOrder.headquarter.name === param);
      
      this.filteredlist = new Array(...list);
    }

    /*if (type === "name") {
      list = this.items.filter((e) =>
        e.purchaseOrder.headquarter.name.toUpperCase().includes(param.toUpperCase())
      );
      this.filteredlist = list;
      return;
    }*/
  }

}
