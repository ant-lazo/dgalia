import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Supply } from '../../models/supply';
import { SupplyService } from '../../services/supply-service.service';

@Component({
  selector: 'app-select-supply',
  templateUrl: './select-supply.component.html',
  styleUrls: ['./select-supply.component.scss']
})
export class SelectSupplyComponent   {

  @Output() supplySelected: EventEmitter<Supply> = new EventEmitter();

  public list: Supply[] = [];

  constructor(
    private _matDialogRef: MatDialogRef<SelectSupplyComponent>,
    private _supplies: SupplyService
  ) { }

  public listenSearchBoxParam(param: string): void {
    const request: Observable<Supply[]> = this._supplies.findByName(param);
    if (param != '') {
      request.subscribe((resp: Supply[]) => {
        this.list = resp;
      });
    }
  }

  public onClose(supply?: Supply): void {
    this._matDialogRef.close(supply);
  }
}
