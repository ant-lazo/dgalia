import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAlertComponent } from 'app/shared/delete-alert/delete-alert.component';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import config from 'assets/language/es/measured-unit.json';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RowAppButtonModel } from '../../../../shared/row-buttons/models/row-nutton.model';
import { MeasuredUnitEditComponent } from '../../components/measured-unit-edit/measured-units-edit.component';
import { MeasuredUnitRegisterComponent } from '../../components/measured-units-register/measured-units-register.component';
import { MeasuredUnit } from '../../models/measured-unit.model';
import { MeasuredUnitService } from '../../services/measured-unit.service';
import { MeasuredUnitListTableModel } from '../../view-models/list-table.model';
import { MeasuredunitListComponentModel } from '../../view-models/list_component.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public measureUnitListRequest: Observable<MeasuredUnit[]>;
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
    const dialogRef = this.dialog.open(MeasuredUnitRegisterComponent, {
      width: '650px',
      height: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.getList();
    });
  }

  private setPageModels() {
    this.model = MeasuredunitListComponentModel.fromJson(config.list_component);
    this.registerButton.push(this.model.registerButton);
    this.tableModel = MeasuredUnitListTableModel.fromJson(config.list_table);
    this.tableModel.tableLabels = ["code", "name", "options"];
  }

  private getList(): void {
    this.measureUnitListRequest = this._measuredUnit.getGetList().pipe(map((list: MeasuredUnit[]) => {
      this.measuredUnitList = list;
      return list;
    }));
  }

  editar(event: any) {
    const dialogRef = this.dialog.open(MeasuredUnitEditComponent, {
      width: '650px',
      height: '450px',
      data: event
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.getList();
    });
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
