import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
  <div class="w-full">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [
  ]
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
