import { Component, Input, OnInit } from '@angular/core';
import { ProductKardex } from 'app/modules/inventory/models/product-kardex.model';

@Component({
  selector: 'inventory-kardex-values',
  templateUrl: './values.component.html',
})
export class ValuesComponent implements OnInit {

  @Input() data: ProductKardex;

  constructor() { }

  ngOnInit(): void {
  }

}
