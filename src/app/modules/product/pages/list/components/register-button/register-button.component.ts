import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product-list-register-button',
  templateUrl: './register-button.component.html',
  styles: [
  ]
})
export class RegisterButtonComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public navigateToRegisterPage(): void {
    this._router.navigate(['productos/registro'])
  }

}
