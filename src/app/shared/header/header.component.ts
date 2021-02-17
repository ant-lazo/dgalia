import { Component, Input, } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-header',
  host: { 'class': 'header' },
  template: `
  <div class="container">
      <div class="breadcrumb">
          <span class="path"> {{ module || 'Modulo' }} </span>
      </div>
      <h1> 
      <button *ngIf="urlRoute" (click)="navigateToBack()"  mat-button router>
        <mat-icon>arrow_back</mat-icon>
      </button>
        {{ title || 'Titulo' }}
        <span *ngIf="highlightext" class="text-primary">
              {{ highlightext || 'texto resaltado' }}
          </span>
      </h1>
  </div> `,
  styles: [
  ]
})
export class HeaderComponent {
  @Input() module: string;
  @Input() title: string;
  @Input() urlRoute: string;
  @Input() highlightext: string;

  constructor(
    private _router: Router,
    private _location: Location
  ) { }

  public navigateToBack() {
    if (this.urlRoute === 'back') {
      console.log('hola?');

      this._location.back();
      return;
    }
    this._router.navigate([this.urlRoute]);


  }
}
