import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { user } from 'app/data/mock/common/user/data';
import { Observable } from 'rxjs';
import { Items } from '../../models/user';
import { UserServiceService } from '../../services/user-service.service';


@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.scss']
})
export class SelectUserComponent {

  @Output() userSelected: EventEmitter<Items> = new EventEmitter();

  public list: Items[] = [];


  constructor(
    private _matDialogRef: MatDialogRef<SelectUserComponent>,
    private _user: UserServiceService
  ) { }

  public listenSearchBoxParam(param: string): void {
    const request: Observable<Items[]> = this._user.findByName(param);
    if (param != '') {
      request.subscribe((resp: Items[]) => {
        this.list = resp;
      });
    }
  }

  public onClose(_items?: Items): void {
    this._matDialogRef.close(user);
  }

  // ngOnInit(): void {
  // }

}
