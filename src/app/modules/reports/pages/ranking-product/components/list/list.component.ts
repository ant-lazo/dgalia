import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterProduct } from '../../models/filter-products';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public productListRequest: Observable<FilterProduct[]>;
  @Input() productlist: FilterProduct[];
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns: string[] = ['productCode', 'inputs', 'stock'];
  public dataSource: MatTableDataSource<FilterProduct> = new MatTableDataSource();

  constructor() { }

  ngOnInit(): void {
  }

}
