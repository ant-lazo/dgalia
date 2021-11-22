import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { user } from 'app/data/mock/common/user/data';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserServiceService } from '../../services/user-service.service';


@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.scss']
})
export class SelectUserComponent {

  @Output() userSelected: EventEmitter<User> = new EventEmitter();

  public list: User[] = [];


  constructor(
    private _matDialogRef: MatDialogRef<SelectUserComponent>,
    private _user: UserServiceService
  ) { }

  public listenSearchBoxParam(param: string): void {
    const request: Observable<User[]> = this._user.findByName(param);
    if (param != '') {
      request.subscribe((resp: User[]) => {
        this.list = resp;
      });
    }
  }

  public onClose(_items?: User): void {
    this._matDialogRef.close(user);
  }

  // ngOnInit(): void {
  // }

}
