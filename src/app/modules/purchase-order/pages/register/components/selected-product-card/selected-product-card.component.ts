import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'purchase_order-register-selected-product-card',
  templateUrl: './selected-product-card.component.html',
  styles: [
  ]
})
export class SelectedProductCardComponent implements OnInit {

  @Input() code: string;
  @Input() name: string;
  @Input() categoryName: string;
  @Input() muName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
