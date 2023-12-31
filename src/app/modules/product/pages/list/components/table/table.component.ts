import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { Product } from 'app/modules/product/models/product.model';
import { ProductService } from 'app/modules/product/services/product.service';
import { DeleteAlertComponent } from 'app/shared/delete-alert/delete-alert.component';
import { ToastrService } from 'ngx-toastr';
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
  public dataSource: MatTableDataSource<Product> = new MatTableDataSource();

  constructor(
    private _products: ProductService,
    private _router: Router,
    private _dialog: MatDialog,
    private _toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.setProductList();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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
    this.dataSource.sort = this.sort;
  }

  public filter(name: string): void {
    const newlist: Product[] = this.produdcList.filter((element: Product) => {
      return element.name.toUpperCase().includes(name.toUpperCase());
    });

    this.setDataTableList(newlist);
  }

  public navigateActions(action: string, product: Product): void {
    switch (action) {
      case 'edit':
        this._router.navigate(['productos/actualizar', product.code]);
        break;
      case 'detail':
        this._router.navigate(['productos/detalle', product.code]);
        break;
      case 'delete':
        this.openDeleteAlertDialog(product);
        break;
      default:
        break;
    }
  }

  public openDeleteAlertDialog(product: Product): void {
    const dialog = this._dialog.open(DeleteAlertComponent, {
      width: '70%',
      data: { title: `El producto ${product.name}` }
    });

    dialog.afterClosed().subscribe((result: boolean) => {
      if (result) this.deleteProduct(product.code);
    });
  }

  private deleteProduct(code: string): void {
    const request = this._products.delete(code);
    request.subscribe((res: JsonResp) => {
      this._toast.success(res.message, 'Muy bien!');
      this.setProductList();
    })
  }

}
