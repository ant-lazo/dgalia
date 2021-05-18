import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RowAppButtonModel, RowButtonType } from '../../../../shared/row-buttons/models/row-nutton.model';
import { Supply } from '../../models/supply';
import { SupplyService } from '../../services/supply-service.service';
import { SupplyRegisterComponent } from '../../components/supply-register/supply-register.component';
import { DeleteAlertComponent } from 'app/shared/delete-alert/delete-alert.component';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { SupplyEditComponent } from '../../components/supply-edit/supply-edit.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-supply-list',
  templateUrl: './supply-list.component.html',
  styleUrls: ['./supply-list.component.scss']
})
export class SupplyListComponent implements OnInit {

  public requestSupplyList: Observable<Supply[]>;
  public registerButton: RowAppButtonModel[];
  public supplyList: Supply[];
  public supplyFilteredList: Supply[];

  constructor(
    private _supply: SupplyService,
    private dialog: MatDialog,
    private _appNotifications: AppNotificationsService
    ) {
    this.buildRegisterButton();
  }

  ngOnInit(): void {
    this.setList();
  }

  public setList(): void {
    this.requestSupplyList =  this._supply.getList().pipe((map((list: Supply[]) => {
      this.supplyList = list;
      this.supplyFilteredList = list;
      return list;
    })));
  }

  public register(event: string) {
    switch (event) {
      case 'register':
        this.buildRegisterModel();
        break;

      default:
        break;
    }
  }

  editar(event:any){
    const dialogRef = this.dialog.open(SupplyEditComponent, {
      width: '750px',
      height: '550px',
      data: event
  });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.setList();
    });

  }

  buildRegisterButton(): void {
    this.registerButton = [
      new RowAppButtonModel({
        action: 'register',
        color: 'primary',
        icon: 'save',
        label: 'Registrar',
        type: RowButtonType.Stroked
      }),
    ];
  }

  private buildRegisterModel(): void {
    const dialogRef = this.dialog.open(SupplyRegisterComponent, {
      width: '750px',
      height: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.setList();
    });
  }

  public filterByName(name: string): void {
    if (name.length > 0) {
      this.supplyFilteredList = this.supplyList.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
    } else {
      this.supplyFilteredList = this.supplyList;
    }
  }

  public validationToDeleteSupply(supply: Supply): void {
    const dialogRef = this.dialog.open(DeleteAlertComponent, {
      width: '600px',
      height: '400px',
      data: { title: `el suministro ${supply.name}` }
    });

    dialogRef.afterClosed().subscribe(result => result ? this.deleteSupply(supply.id) : null);
  }

  private deleteSupply(id: number): void {
    this._supply.delete(id).subscribe(resp => {
      this._appNotifications.deleteSuccess(null, resp.message);
      this.setList();
    });
  }
}
