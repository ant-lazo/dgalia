import { Component, OnInit, OnChanges, OnDestroy, ViewChild, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SubRecipeSelectedSupply } from '../../models/sub-recipe-selected-supply';
import { SubRecipeRegisterFomService } from '../../services/sub-recipe-register-fom.service';

@Component({
  selector: 'sub-recipe-supply-list',
  templateUrl: './sub-recipe-supply-list.component.html',
  styleUrls: ['./sub-recipe-supply-list.component.scss']
})
export class SubRecipeSupplyListComponent implements OnChanges, OnDestroy, OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input() list: SubRecipeSelectedSupply[] = [];
  @Input() deleteButton: boolean;

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource([]);

  constructor(
    private _formService: SubRecipeRegisterFomService
  ) { }

  ngOnInit(): void {
    this.setColumns();
  }

  ngOnChanges() {
    if (this.list) this.setDataSourceList(this.list);
  }

  ngOnDestroy(): void {
    this._formService.supplies = null;
  }

  private setDataSourceList(list: SubRecipeSelectedSupply[]) {
    this._formService.supplies = list;
    this.dataSource = new MatTableDataSource(list);
    this.dataSource.sort = this.sort;
  }

  public deleteSupply(element: SubRecipeSelectedSupply): void {
    const index = this.list.indexOf(element);
    this.list.splice(index, 1);
    this.setDataSourceList(this.list);
  }

  private setColumns() {
    const columns: string[] = ['code', 'name', 'category', 'measuredUnit', 'quantity'];
    if (this.deleteButton) columns.push('actions');
    this.displayedColumns = columns;
  }
}
