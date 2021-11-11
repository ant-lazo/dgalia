import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DeleteAlertComponent } from "app/shared/delete-alert/delete-alert.component";
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import {
  RowAppButtonModel,
  RowButtonType,
} from "../../../../shared/row-buttons/models/row-nutton.model";
import { UserEditComponent } from "../.././components/user-edit/user-edit.component";
import { UserRegisterComponent } from "../../components/user-register/user-register.component";
import { User } from "../../models/user";
import { UserServiceService } from "../../services/user-service.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  public requestItemsList: Observable<User[]>;
  public registerButton: RowAppButtonModel[];
  public itemsList: User[];
  public itemsFilteredList: User[];

  constructor(
    private _userService: UserServiceService,
    private dialog: MatDialog,
    private _appNotifications: AppNotificationsService
  ) {
    this.buildRegisterButton();
  }

  ngOnInit(): void {
    this.setList();
  }

  public setList(): void {
    this.requestItemsList = this._userService.getList().pipe(
      map((list: User[]) => {
        this.itemsList = list;
        this.itemsFilteredList = list;
        return list;
      })
    );
  }

  public register(event: string) {
    switch (event) {
      case "register":
        this.buildRegisterModel();
        break;

      default:
        break;
    }
  }

  editar(event: any) {
    const dialogRef = this.dialog.open(UserEditComponent, {
      width: "750px",
      height: "550px",
      data: event,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.setList();
    });
  }

  buildRegisterButton(): void {
    this.registerButton = [
      new RowAppButtonModel({
        action: "register",
        color: "primary",
        icon: "save",
        label: "Registrar",
        type: RowButtonType.Stroked,
      }),
    ];
  }

  private buildRegisterModel(): void {
    const dialogRef = this.dialog.open(UserRegisterComponent, {
      width: "750px",
      height: "550px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.setList();
    });
  }

  public filterByName(name: string): void {
    if (name.length > 0) {
      this.itemsFilteredList = this.itemsList.filter((e) =>
        e.fullname.toLowerCase().includes(name.toLowerCase())
      );
    } else {
      this.itemsFilteredList = this.itemsList;
    }
  }

  public validationToDeleteItems(items: User): void {
    const dialogRef = this.dialog.open(DeleteAlertComponent, {
      width: "600px",
      height: "400px",
      data: { title: `el suministro ${items.fullname}` },
    });

    dialogRef.afterClosed();
    // .subscribe((result) => (result ? this.deleteItems(items.fullname) : null));
  }

  private deleteItems(id: number): void {
    this._userService.delete(id).subscribe((resp) => {
      this._appNotifications.deleteSuccess(null, resp.message);
      this.setList();
    });
  }
}
