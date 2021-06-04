import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order',
  template: `
    <div class="w-full">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
  ]
})
export class PurchaseOrderComponent implements OnInit {

  public static registerRoute = '/orden-de-compra/registro'

  constructor() { }

  ngOnInit(): void {
  }

}
