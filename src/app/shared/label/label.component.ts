import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  template: `
<span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded  uppercase last:mr-0 mr-1" [ngClass]="type">
    {{ text }}
</span>
  `,
  styles: [
  ]
})
export class LabelComponent implements OnInit {

  @Input() text: string;
  @Input() color: string;

  public type: string;

  constructor() {
  }

  ngOnInit(): void {
    this.setType();
  }

  public setType(): void {
    switch (this.color) {
      case 'gray':
        this.type = 'text-blueGray-600 bg-blueGray-200';
        break;
      case 'orange':
        this.type = 'text-orange-600 bg-orange-200';
        break;
      case 'teal':
        this.type = 'text-teal-600 bg-teal-200';
        break;
      case 'indigo':
        this.type = 'text-indigo-600 bg-indigo-200';
        break;
      default:
        this.type = 'text-red-600 bg-red-200'
        break;
    }
  }
}
