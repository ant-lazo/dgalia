import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'app/modules/product/models/product.model';
import { ProductService } from 'app/modules/product/services/product.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'products-list-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public productListRequest: Observable<Product[]>;
  public produdcList: Product[] = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public displayedColumns: string[] = ['image', 'code', 'name', 'category', 'actions'];
  public dataSource: MatTableDataSource<Product> = new MatTableDataSource([]);

  constructor(
    private _products: ProductService
  ) { }

  ngOnInit(): void {
    this.setProductList();
  }

  private setProductList(): void {
    this.productListRequest = this._products.getlist().pipe(map((products: Product[]) => {
      this.produdcList = products;
      this.setDataTableList(products)
      return products;
    }));
  }

  private setDataTableList(list: Product[]) {
    this.dataSource = new MatTableDataSource(list);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

}
