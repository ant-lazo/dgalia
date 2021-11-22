import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { ProductStock } from "app/modules/inventory/models/product-stock.model";

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ApiRoutes } from "app/core/api/constants/api.routes";
import { Router } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  @Input() inventoryList: ProductStock[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns: string[] = [
    "code",
    "name",
    "headquarter",
    "quantity",
    "measuredUnit",
    "update",
    "download",
  ];
  public dataSource: MatTableDataSource<ProductStock> =
    new MatTableDataSource();

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.inventoryList) this.setDataSourceList();
  }

  private setDataSourceList(): void {
    this.dataSource = new MatTableDataSource(this.inventoryList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public redirect(item: ProductStock): void {
    this._router.navigate([
      "inventario/kardex/" + item.productCode + "/" + item.headquarter.id,
    ]);
  }
}
