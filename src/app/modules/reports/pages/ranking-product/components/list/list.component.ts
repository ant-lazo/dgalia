import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterProduct } from '../../models/filter-products';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public productListRequest: Observable<FilterProduct[]>;
  @Input() productlist: FilterProduct[];
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns: string[] = ['productCode', 'productName', 'quantity', 'headquarterName', 'measuredUnitName'];
  public dataSource: MatTableDataSource<FilterProduct> = new MatTableDataSource();

  constructor() { }

  ngOnInit(): void {
    if (this.productlist) this.setDataSourceList();
  }

  private setDataSourceList(): void {
    this.dataSource = new MatTableDataSource(this.productlist);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
