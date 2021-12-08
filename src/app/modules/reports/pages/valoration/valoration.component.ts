import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductStockValoration } from '../valoration/models/product-stock-valoration'
import { InventoryService } from 'app/modules/inventory/services/inventory.service';
import { ValorationFormModel } from './models/register-form';
import { ShowFormHelper } from './helpers/show-form-validations.helper';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';

@Component({
  selector: "app-valoration",
  templateUrl: "./valoration.component.html",
  styleUrls: [],
})
export class ValorationComponent implements OnInit {
  public request: Observable<ProductStockValoration[]>;
  public items: ProductStockValoration[] = [];
  public filteredlist: ProductStockValoration[] = [];
  public form: ValorationFormModel;

  constructor(
    private _inventory: InventoryService,
    private _helper: ShowFormHelper,
    private _notifications: AppNotificationsService
  ) { }

  ngOnInit(): void {
    this.setDefaultData();
  }

  public onShowMethod(): void {
    const error: string = this._helper.validateFormData(this.form);
    if (error != '') {
      this._notifications.error(null, error);
      return;
    }
    this.setValoration();
  }

  public listenFormChanges(form: ValorationFormModel): void {
    this.form = form;
  }

  public setValoration(): void{
    this.request = this._inventory.getSotckValoration(this.form.headquarterId);
    this.request.subscribe(k => {
      this.filteredlist = k;
    });
  }

  private setDefaultData(): void {
    this.request = this._inventory.getSotckValoration(0);
    this.request.subscribe(k => {
      this.filteredlist = k;
    });
  }


  /*public listenFilter(action: string): void {
    const type = action.split(":")[0];
    const param = action.split(":")[1];

    this.filteredlist = [];
    let list: ProductStockValoration[] = [];

    if (type === "headquarterId") {
      list = this.items.filter((e) => e.headquarter.name === param);
      this.filteredlist = new Array(...list);
      this.headquarterId = param;
      
    }
    console.log("afuera",this.headquarterId);

    if (type === "name") {
      list = this.items.filter((e) =>
        e.productName.toUpperCase().includes(param.toUpperCase())
      );
      this.filteredlist = list;
      return;
    }
  }*/
}
