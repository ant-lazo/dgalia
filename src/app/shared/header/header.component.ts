import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-header',
  host: { 'class': 'header' },
  template: `
  <div class="container">
      <div class="breadcrumb">
          <span class="path"> {{ module || 'Modulo' }} </span>
      </div>
      <h1> 
      <button *ngIf="urlRoute" [routerLink]="urlRoute"  mat-button router>
        <mat-icon>arrow_back</mat-icon>
      </button>
        {{ title || 'Titulo' }}
        <span *ngIf="highlightext" class="text-indigo-500">
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
}
