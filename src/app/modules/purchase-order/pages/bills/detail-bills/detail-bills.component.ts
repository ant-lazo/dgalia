import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

import { PurchaseOrder } from '../../../models/ purchase-order.model';

//import { PurchaseOrderService } from '../../services/purchase-order.service';



@Component({
  selector: 'app-detail-bills',
  templateUrl: './detail-bills.component.html',
  styleUrls: ['./detail-bills.component.scss']
})
export class DetailBillsComponent implements OnInit {

  public rqPurchaseOrder: PurchaseOrder;

  constructor(
    
    private _activatedRoute: ActivatedRoute
  ) { }

  public get purchaseOrderCode(): string {
    return this._activatedRoute.snapshot.params.code;
  } 

  ngOnInit(): void {
    
  }
 

}
