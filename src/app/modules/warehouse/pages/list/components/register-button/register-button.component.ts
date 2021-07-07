import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'warehouse-register-button',
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.scss']
})
export class RegisterButtonComponent implements OnInit {

  @Output() registerComplete: EventEmitter<void> = new EventEmitter(null);

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public onRegisterPressed(): void {
    this._router.navigate(['almacenes/registro']);
  }

}
