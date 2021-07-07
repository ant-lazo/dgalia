import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PurchaseOrderService } from 'app/modules/purchase-order/services/purchase-order.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'purchase_order-register-new_doc_info',
  templateUrl: './new-doc-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewDocInfoComponent implements OnInit {

  @Input() demandsheetCode: string;

  public nextCodeRequest: Observable<string>
  public today: Date;

  constructor(
    private _purchaseOrder: PurchaseOrderService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.today = new Date();
    this.nextCodeRequest = this._purchaseOrder.getNextCode(this.demandsheetCode).pipe(
      catchError(err => {
        this._location.back();
        return throwError(err)
      })
    );
  }

}
