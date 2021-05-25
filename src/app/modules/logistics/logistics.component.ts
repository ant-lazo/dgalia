import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logistics',
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
  ]
})
export class LogisticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
