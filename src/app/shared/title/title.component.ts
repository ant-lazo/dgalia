import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styles: [
  ]
})
export class TitleComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() backButton: boolean;
  @Input() backWithRoute: string;

  constructor(
    private _location: Location,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public backButtonPressed(): void {
    if (this.backButton) {
      this._location.back();
    }  else {
      this._router.navigate([this.backWithRoute]);
    }
  }

}
