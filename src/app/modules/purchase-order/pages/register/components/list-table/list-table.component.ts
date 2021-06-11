import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { RqPoSelectedItem } from '../../models/po-selected-item.model';
import { SelectProductDialogComponent } from '../selec-product-dialog/select-product-dialog.component';

@Component({
  selector: 'purchase_order-register-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTableComponent implements OnChanges {

  @Input() list: RqPoSelectedItem[];
  @Output() selectedToDelete:EventEmitter<RqPoSelectedItem> = new EventEmitter();

  public displayedColumns: string[] = ['supplyCode', 'supplyName', 'reqQuant', 'reqMu', 'pdt', 'pu', 'qtt', 'giv', 'total', 'opts'];
  public dataSource: MatTableDataSource<RqPoSelectedItem> = new MatTableDataSource([]);

  constructor(
    private _matDialog: MatDialog
  ) { }

  ngOnChanges(): void {
    if (this.list && this.list.length && this.list.length > 0) this.setDataSourceList();
  }

  private setDataSourceList() {
    this.dataSource = new MatTableDataSource(this.list);
  }

  public openSelectProduct(): void {
    this._matDialog.open(SelectProductDialogComponent, {
      width: '70%',
      height: '500px'
    });
  }



}
