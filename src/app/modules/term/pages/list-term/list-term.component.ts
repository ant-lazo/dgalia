import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAlertComponent } from 'app/shared/delete-alert/delete-alert.component';
import { RowAppButtonModel } from 'app/shared/row-buttons/models/row-nutton.model';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { Term } from '../../models/term.interface';
import { TermsService } from '../../services/terms.service';
import { TermListTableModel } from '../../view-models/list-table.model';
import { TermListComponentModel } from '../../view-models/list_component.model';
import  config from 'assets/language/es/measured-unit.json';
import { TermRegisterComponent } from '../../components/term-register/term-register.component';
import { TermEditComponent } from '../../components/term-edit/term-edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list-term.component.html',
  styleUrls: ['./list-term.component.scss']
})
export class ListTermComponent implements OnInit {

  public model: TermListComponentModel;
  public tableModel: TermListTableModel;
  public termList: Term[];

  registerButton: RowAppButtonModel[] = [];

  constructor(
    private dialog: MatDialog,
    private _appNotifications: AppNotificationsService,
    private _term: TermsService
  ) {
    this.setPageModels();
  }

  ngOnInit(): void {
    this.getList();
  }

  public register() {
    const dialogRef = this.dialog.open(TermRegisterComponent, {
      width: '650px',
      height: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.getList();
    });
  }

  private setPageModels() {
    this.model = TermListComponentModel.fromJson(config.list_component);
    this.registerButton.push(this.model.registerButton);
    this.tableModel = TermListTableModel.fromJson(config.list_table);
    this.model.title = "Ciclos";
    this.model.module = "Administración";
    this.tableModel.tableLabels = ["code","name","options"];
  }

  private getList(): void {
    this._term.getCompleteList().subscribe(list => {
      this.termList = list;
    });
  }

  editar(event:any){
    const dialogRef = this.dialog.open(TermEditComponent, {
      width: '650px',
      height: '450px',
      data: event
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.getList();
    });
  }

  public validationToDeleteTerm(term: Term): void {
    const dialogRef = this.dialog.open(DeleteAlertComponent, {
      width: '600px',
      height: '400px',
      data: { title: `el termino ${term.name}` }
    });

    dialogRef.afterClosed().subscribe(result => result ? this.deleteTerm(term.id) : null);
  }

  private deleteTerm(id: number): void {
    this._term.delete(id).subscribe(resp => {
      this._appNotifications.deleteSuccess(null, resp.message);
      this.getList();
    });
  }
}
