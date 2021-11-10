import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  template: `
  <div class="w-full">
  <router-outlet></router-outlet>
  </div>
    `,
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
