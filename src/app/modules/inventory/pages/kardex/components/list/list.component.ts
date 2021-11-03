import { ChangeDetectionStrategy, Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductKardex } from 'app/modules/inventory/models/product-kardex.model';

@Component({
  selector: 'inventory-kardex-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnChanges {

  @Input() inventoryList: ProductKardex[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns: string[] = ['code', 'document', 'headquarter', 'type', 'quantity', 'measuredUnit', 'date'];
  public dataSource: MatTableDataSource<ProductKardex> = new MatTableDataSource();

  constructor() { }

  ngOnChanges(): void {
    if (this.inventoryList) this.setDataSourceList();
    console.log("inventoryList : ", this.inventoryList);
  }

  private setDataSourceList(): void {
    this.dataSource = new MatTableDataSource(this.inventoryList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


}
