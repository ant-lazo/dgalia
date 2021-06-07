import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProviderDetailDialogComponent } from 'app/modules/provider/components/provider-detail-dialog/provider-detail-dialog.component';
import { Provider } from 'app/modules/provider/models/provider';
import { ProviderComponent } from 'app/modules/provider/provider.component';

@Component({
  selector: 'provider-list-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  @Input() list: Provider[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public displayedColumns: string[] = ['code', 'name', 'documentType', 'document', 'location', 'actions'];
  public dataSource: MatTableDataSource<Provider> = new MatTableDataSource([]);

  constructor(
    private _router: Router,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (this.list && this.list.length > 0) this.setDataSourceList();
  }

  private setDataSourceList() {
    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public navigateToUpdate(providerCode: string): void {
    this._router.navigate([ProviderComponent.updateRoute, providerCode]);
  }

  public openDetailDialog(code: Provider): void {
    this._matDialog.open(ProviderDetailDialogComponent, {
      width: '70%',
      data: { code }
    });

  }

}
