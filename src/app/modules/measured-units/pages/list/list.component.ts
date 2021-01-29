import { Component, OnInit } from '@angular/core';
import { MeasuredunitListComponentModel } from '../../view-models/list_component.model';
import * as config from 'assets/language/es/measured-unit.json';
import { RowAppButtonModel } from '../../../../shared/row-buttons/models/row-nutton.model';
import { MeasuredUnitListTableModel } from '../../view-models/list-table.model';
import { MeasuredUnit } from '../../models/measured-unit.model';
import { MeasuredUnitService } from '../../services/measured-unit.service';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAlertComponent } from 'app/shared/delete-alert/delete-alert.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public model: MeasuredunitListComponentModel;
  public tableModel: MeasuredUnitListTableModel;
  public measuredUnitList: MeasuredUnit[];

  registerButton: RowAppButtonModel[] = [];

  constructor(
    private dialog: MatDialog,
    private _appNotifications: AppNotificationsService,
    private _measuredUnit: MeasuredUnitService
  ) {
    this.setPageModels();
  }

  ngOnInit(): void {
    this.getList();
  }

  public register() {
    console.log('implements');
  }

  private setPageModels() {
    this.model = MeasuredunitListComponentModel.fromJson(config.list_component);
    this.registerButton.push(this.model.registerButton);
    this.tableModel = MeasuredUnitListTableModel.fromJson(config.list_table);
  }

  private getList(): void {
    this._measuredUnit.getGetList().subscribe(list => {
      this.measuredUnitList = list;
    });
  }

  editar(event:any){
    // const dialogRef = this.dialog.open(MeasuredunitEditComponent, {
    //   width: '750px',
    //   height: '550px',
    //   data: event
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) this.getList();
    // });

  }

  public validationToDeleteMeasuredunit(measuredunit: MeasuredUnit): void {
    const dialogRef = this.dialog.open(DeleteAlertComponent, {
      width: '600px',
      height: '400px',
      data: { title: `el suministro ${measuredunit.name}` }
    });

    dialogRef.afterClosed().subscribe(result => result ? this.deleteMeasuredunit(measuredunit.id) : null);
  }

  private deleteMeasuredunit(id: number): void {
    this._measuredUnit.delete(id).subscribe(resp => {
      this._appNotifications.deleteSuccess(null, resp.message);
      this.getList();
    });
  }
}
