import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Warehouse } from '../../models/warehouse.model';
import { WarehouseService } from '../../services/warehouse.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styles: [
  ]
})
export class UpdateComponent implements OnInit {

  public warehouse: Warehouse;

  constructor(
    private _warehouse: WarehouseService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setWarehouse();
  }

  public get warehouseCode(): string {
    return this._activatedRoute.snapshot.params.code;
  }

  private setWarehouse():  void {
    const request: Observable<Warehouse> = this._warehouse.findByCode(this.warehouseCode);
    request.subscribe((w: Warehouse) => {
      this.warehouse = w;
    });
  }

}
