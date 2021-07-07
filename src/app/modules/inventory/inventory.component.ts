import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  template: `
  <div class="w-full">
      <router-outlet></router-outlet>
  </div>
  `,
  styles: [
  ]
})
export class InventoryComponent implements OnInit {

  public static productKardex = '/inventario/kardex'

  constructor() { }

  ngOnInit(): void {
  }

}
