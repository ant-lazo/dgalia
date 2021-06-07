import { Component, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { RecipeSelectedSupply } from '../../models/recipe-selected-supply';
import { RecipeRegisterFomService } from '../../services/recipe-register-fom.service';

@Component({
  selector: 'recipe-supply-list',
  templateUrl: './recipe-supply-list.component.html',
  styleUrls: ['./recipe-supply-list.component.scss']
})
export class RecipeSupplyListComponent implements OnChanges, OnDestroy, OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input() list: RecipeSelectedSupply[] = [];
  @Input() deleteButton: boolean;

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource([]);

  constructor(
    private _formService: RecipeRegisterFomService
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

  private setDataSourceList(list: RecipeSelectedSupply[]) {
    this._formService.supplies = list;
    this.dataSource = new MatTableDataSource(list);
    this.dataSource.sort = this.sort;
  }

  public deleteSupply(element: RecipeSelectedSupply): void {
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
