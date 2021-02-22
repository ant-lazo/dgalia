import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAlertComponent } from 'app/shared/delete-alert/delete-alert.component';
import { RowAppButtonModel } from 'app/shared/row-buttons/models/row-nutton.model';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { Headquarter } from '../../models/headquarter.model';
import { HeadquartesService } from '../../services/headquartes.service';
import { HeadquarterListTableModel } from '../../view-models/list-table.model';
import { HeadquarterListComponentModel } from '../../view-models/list_component.model';
import * as config from 'assets/language/es/measured-unit.json';
import { HeadquarterRegisterComponent } from '../../components/headquarter-register/headquarter-register.component';
import { HeadquarterEditComponent } from '../../components/headquarter-edit/headquarter-edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list-headquarter.component.html',
  styleUrls: ['./list-headquarter.component.scss']
})
export class ListHeadquarterComponent implements OnInit {

  public model: HeadquarterListComponentModel;
  public tableModel: HeadquarterListTableModel;
  public headquarterList: Headquarter[];

  registerButton: RowAppButtonModel[] = [];

  constructor(
    private dialog: MatDialog,
    private _appNotifications: AppNotificationsService,
    private _headquarter: HeadquartesService
  ) {
    this.setPageModels();
  }

  ngOnInit(): void {
    this.getList();
  }

  public register() {
    const dialogRef = this.dialog.open(HeadquarterRegisterComponent, {
      width: '650px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.getList();
    });
  }

  private setPageModels() {
    this.model = HeadquarterListComponentModel.fromJson(config.list_component);
    this.registerButton.push(this.model.registerButton);
    this.tableModel = HeadquarterListTableModel.fromJson(config.list_table);
    this.model.title = "Sedes";
    this.model.module = "Administración";
  }

  private getList(): void {
    this._headquarter.getCompleteList().subscribe(list => {
      this.headquarterList = list;
    });
  }

  public editar(event:any): void{
    const dialogRef = this.dialog.open(HeadquarterEditComponent, {
      width: '700px',
      height: '500px',
      data: event
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.getList();
    });
  }

  public validationToDeleteHeadquarter(headquarter: Headquarter): void {
    const dialogRef = this.dialog.open(DeleteAlertComponent, {
      width: '600px',
      height: '400px',
      data: { title: `el headquarterino ${headquarter.name}` }
    });

    dialogRef.afterClosed().subscribe(result => result ? this.deleteHeadquarter(headquarter.id) : null);
  }

  private deleteHeadquarter(id: number): void {
    this._headquarter.delete(id).subscribe(resp => {
      this._appNotifications.deleteSuccess(null, resp.message);
      this.getList();
    });
  }
}
