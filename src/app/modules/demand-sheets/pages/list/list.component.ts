import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAlertComponent } from 'app/shared/delete-alert/delete-alert.component';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { Observable } from 'rxjs';
import { DemandSheet } from '../../models/demand-sheet.model';
import { DemandSheetService } from '../../services/demand-sheet.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public request: Observable<DemandSheet[]>

  constructor(
    private _dialog: MatDialog,
    private _appNotification: AppNotificationsService,
    private _demandSheets: DemandSheetService,

  ) { }

  ngOnInit(): void {
    this.setRequest();
  }

  private setRequest(): void {
    this.request = this._demandSheets.getAll();
  }

  public onDeletePressed(item: DemandSheet): void {
    const dialogRef = this._dialog.open(DeleteAlertComponent, {
      width: '70%',
      data: {title: 'La hoja de demanda ' + item.code}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.deleteDemandSheet(item.code);
    })
  }

  private deleteDemandSheet(code: string): void {
    this._demandSheets.delete(code).subscribe(_ => {
      this._appNotification.deleteSuccess(null, `Se ha eliminado la hoja de demanda correctamente`);
      this.setRequest();
    });
  }
}
