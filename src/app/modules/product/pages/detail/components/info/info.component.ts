import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'app/modules/product/models/product.model';

@Component({
  selector: 'product-detail-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() product: Product

  constructor() { }

  ngOnInit(): void {
  }

}
