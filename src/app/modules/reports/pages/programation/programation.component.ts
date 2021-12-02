import { Component, OnInit } from "@angular/core";
import { ApiRoutes } from "app/core/api/constants/api.routes";
import { Observable } from "rxjs";
import { FilterInvoice } from "./models/filter-invoice";
import { InvoiceFormModel } from "./models/register-form";
import { ProgramationService } from "./services/programation.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-programation",
  templateUrl: "./programation.component.html",
  styleUrls: [],
})
export class ProgramationComponent implements OnInit {
  public request: Observable<FilterInvoice[]>;
  public form: InvoiceFormModel;
  public items: FilterInvoice[] = [];
  public filteredlist: FilterInvoice[] = [];

  constructor(private _invoice: ProgramationService) {}

  ngOnInit(): void {
    this.request = this._invoice.allProgramation().pipe(
      map((e) => {
        this.items = e;
        this.filteredlist = e;
        console.log("que viene:", this.filteredlist);
        return e;
      })
    );
  }

  public onDownloadMethod(): void {
    location.href = ApiRoutes.reports.getProgramationDownload(
      this.form.headquarterId
    );
  }

  public listenFormChanges(action: string): void {
    console.log("aver: ", action);
    const type = action.split(":")[0];
    const param = action.split(":")[1];

    this.filteredlist = [];
    let list: FilterInvoice[] = [];

    if (type === "headquarter") {
      list = this.items.filter(
        (e) => e.purchaseOrder.headquarter.name === param
      );

      this.filteredlist = new Array(...list);
    }
  }
}
