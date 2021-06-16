import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { DemandSheet } from 'app/modules/demand-sheets/models/demand-sheet.model';
import { DemandSheetService } from 'app/modules/demand-sheets/services/demand-sheet.service';
import { PurchaseOrderComponent } from 'app/modules/purchase-order/purchase-order.component';
import { DeleteAlertComponent } from 'app/shared/delete-alert/delete-alert.component';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'demand_sheets-detail-action-buttons',
  templateUrl: './action-buttons.component.html',
})
export class ActionButtonsComponent implements OnInit {

  @Input() demandSheet: DemandSheet;

  constructor(
    private _demandSheets: DemandSheetService,
    private _dialog: MatDialog,
    private _appNtf: AppNotificationsService,
    private _router: Router,
    private _location: Location
  ) { }

  ngOnInit(): void {
  }

  public openDeleteAlert(): void {
    const dialogRef = this._dialog.open(DeleteAlertComponent, {
      width: '70%',
      data: { title: 'La hoja de demanda ' + this.demandSheet.code }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.deleteDemandSheet();
    })
  }

  private deleteDemandSheet(): void {
    const request: Observable<JsonResp> = this._demandSheets.delete(this.demandSheet.code);
    request.subscribe(() => {
      this._appNtf.deleteSuccess();
      this._location.back();
    })
  }

  public navigateToGeneratePurchaseOrder(): void {
    this._router.navigate([PurchaseOrderComponent.registerRoute, this.demandSheet.code]);
  }



}
