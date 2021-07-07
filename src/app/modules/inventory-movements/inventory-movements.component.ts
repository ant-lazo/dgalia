import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-movements',
  template: `
  <div class="w-full">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [
  ]
})
export class InventoryMovementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
