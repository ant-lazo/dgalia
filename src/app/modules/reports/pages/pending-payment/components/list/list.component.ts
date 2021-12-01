import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { FilterInvoice } from '../../models/filter-invoice';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public productListRequest: Observable<FilterInvoice[]>;
  @Input() invoicelist: FilterInvoice[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns: string[] = ['code', 'invoiceDate', 'dueDate', 'purchaseOrderId', 'providerDocument', 'headquarterName','total'];
  public dataSource: MatTableDataSource<FilterInvoice> = new MatTableDataSource();

  constructor() { }

  ngOnInit(): void{  
  }

  ngOnChanges(): void {
    if (this.invoicelist) this.setDataSourceList();
  }



  private setDataSourceList(): void {
    this.dataSource = new MatTableDataSource(this.invoicelist);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
