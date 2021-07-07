import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DemandSheetsComponent } from 'app/modules/demand-sheets/demand-sheets.component';

import { SelectProductDialogComponent } from '../selec-product-dialog/select-product-dialog.component';

@Component({
  selector: 'purchase_order-register-action_buttons',
  templateUrl: './top-action-buttons.component.html',
  styleUrls: ['./top-action-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopActionButtonsComponent implements OnInit {

  @Output() registeredPressed: EventEmitter<any> = new EventEmitter();

  constructor(
    private _router: Router,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public navigateToDemandSheetList(): void {
    this._router.navigate([DemandSheetsComponent.listRoute]);
  }

  public openSelectProduct(): void {
    this._matDialog.open(SelectProductDialogComponent, {
      width: '70%',
      height: '500px'
    });
  }

}
