import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DemandSheet, DemandSheetItem } from 'app/modules/demand-sheets/models/demand-sheet.model';

@Component({
  selector: 'demand_sheets-detail-item_list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() demandSheet: DemandSheet;


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public displayedColumns: string[] = ['code', 'name', 'mu', 'qtt', 'price', 'total'];
  public dataSource: MatTableDataSource<DemandSheetItem> = new MatTableDataSource([]);

  constructor() { }

  ngOnInit(): void {
    if (this.demandSheet && this.demandSheet.items.length && this.demandSheet.items.length > 0) {
      this.setList(this.demandSheet.items);
    }
  }

  public setList(list: DemandSheetItem[]): void {
    this.dataSource = new MatTableDataSource(list);
    this.dataSource.sort = this.sort;
  }

}
