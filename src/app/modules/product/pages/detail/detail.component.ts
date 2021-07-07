import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [
  ]
})
export class DetailComponent implements OnInit {

  public requestProduct: Observable<Product>

  constructor(
    private _products: ProductService,
    private _actiavedRoute: ActivatedRoute
  ) { }

  public get code(): string {
    return this._actiavedRoute.snapshot.params.code;
  }

  ngOnInit(): void {
    this.requestProduct = this._products.findByCode(this.code);
  }



}
