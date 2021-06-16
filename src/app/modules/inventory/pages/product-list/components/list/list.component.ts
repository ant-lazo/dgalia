import { ChangeDetectionStrategy, Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductStock } from 'app/modules/inventory/models/product-stock.model';

import { ListOptionsComponent } from '../list-options/list-options.component';

@Component({
  selector: 'inventory-products-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnChanges {

  @Input() inventoryList: ProductStock[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns: string[] = ['code', 'name', 'headquarter', 'quantity', 'measuredUnit', 'update', 'options'];
  public dataSource: MatTableDataSource<ProductStock> = new MatTableDataSource();

  constructor(
    private _bottomSheet: MatBottomSheet
  ) { }

  ngOnChanges(): void {
    if (this.inventoryList) this.setDataSourceList();
  }

  private setDataSourceList(): void {
    this.dataSource = new MatTableDataSource(this.inventoryList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public openSheet(item: ProductStock): void {
    this._bottomSheet.open(ListOptionsComponent, {
      autoFocus: true,
      data: item,
    });
  }

}
