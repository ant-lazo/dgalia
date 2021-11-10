import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  template: `
  <div class="w-full">
      <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: []
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
