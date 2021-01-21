import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RowAppButtonModel, RowButtonType } from '../../../../shared/row-buttons/models/row-nutton.model';
import { Supply } from '../../models/supply';
import { SupplyServiceService } from '../../services/supply-service.service';
import { SupplyRegisterComponent } from '../../components/supply-register/supply-register.component';

@Component({
  selector: 'app-supply-list',
  templateUrl: './supply-list.component.html',
  styleUrls: ['./supply-list.component.scss']
})
export class SupplyListComponent implements OnInit {

  public registerButton: RowAppButtonModel[];
  public supplyList: Supply[];
  public supplyFilteredList: Supply[];

  constructor(
    private matDialog: MatDialog,
    private _supply: SupplyServiceService,
  ) {
    this.buildRegisterButton();
  }

  ngOnInit(): void {
    this.setList();
  }

  public setList(): void {
    this._supply.getList().subscribe(list => {
      this.supplyList = list;
      this.supplyFilteredList = list;
    });
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
    const dialogRef = this.matDialog.open(SupplyRegisterComponent, {
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

}
