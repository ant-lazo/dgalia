import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DemandSheet } from 'app/modules/demand-sheets/models/demand-sheet.model';
import { PurchaseOrderComponent } from 'app/modules/purchase-order/purchase-order.component';

@Component({
  selector: 'demand_sheet-list-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() demandSheetList: DemandSheet[];
  @Output() selectedToDelete: EventEmitter<DemandSheet> = new EventEmitter();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public displayedColumns: string[] = ['code', 'cooking-schedule', 'start', 'end', 'headquarter', 'actions'];
  public dataSource: MatTableDataSource<DemandSheet> = new MatTableDataSource();

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    if (this.demandSheetList && this.demandSheetList.length > 0) this.setDataTableList(this.demandSheetList);
  }

  private setDataTableList(list: DemandSheet[]) {
    this.dataSource = new MatTableDataSource(list);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public navigateToDetailPage(code: string): void {
    this._router.navigate(['/hojas-de-demanda/detalle', code])
  }

  public navigateToGeneratePurchaseorder(demandSheetCode: string) {
    this._router.navigate([PurchaseOrderComponent.registerRoute, demandSheetCode])
  }

  public sendSelectedToDelete(item: DemandSheet): void {
    this.selectedToDelete.emit(item);
  }

}
