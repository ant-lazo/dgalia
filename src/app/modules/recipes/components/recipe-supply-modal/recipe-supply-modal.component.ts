import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import * as _ from 'underscore';

import { Supply } from '../../../supply/models/supply';
import { SupplyService } from '../../../supply/services/supply-service.service';
import { RecipeSelectedSupply } from '../../models/recipe-selected-supply';

@Component({
  selector: 'app-recipe-supply-modal',
  templateUrl: './recipe-supply-modal.component.html',
  styleUrls: ['./recipe-supply-modal.component.scss']
})
export class RecipeSupplyModalComponent implements OnInit {

  public filteredOptions: Observable<Supply[]>;
  public supplyList: Supply[] = [];
  public searchParam = new FormControl();
  public selectedList: RecipeSelectedSupply[] = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public displayedColumns: string[] = ['code', 'name', 'category', 'measuredUnit', 'quantity', 'actions'];
  public dataSource: MatTableDataSource<Supply> = new MatTableDataSource([]);
  quantity = new FormControl(1, Validators.min(1));

  constructor(
    private _dialogRef: MatDialogRef<RecipeSupplyModalComponent>,
    private _supply: SupplyService,
  ) { }

  ngOnInit(): void {
    this.listenSeachParamChange();
    this.setCompleteSupplyList();
  }

  public onNoSelect() {
    this._dialogRef.close();
  }

  private listenSeachParamChange() {
    this.filteredOptions = this.searchParam.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): Supply[] {
    const filterValue = value.toLowerCase();
    return this.supplyList.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  private setCompleteSupplyList(): void {
    this._supply.getList().subscribe(list => {
      this.supplyList = list;
      this.listenSeachParamChange();
    });
  }

  public setSupply(event: MatAutocompleteSelectedEvent): void {

    const founded = this.supplyList.find(e => e.name === event.option.value);
    const exist = this.selectedList.find(element => element.id == founded.id);

    if (!exist) {
      const newItem = new RecipeSelectedSupply(
        founded.id,
        founded.code,
        founded.name,
        founded.category.name,
        founded.measuredUnit.name,
        null,
        founded.measuredUnit.id
      );
      this.selectedList.push(newItem);

      this.setDataSourceList(this.selectedList);
    }
    this.searchParam.setValue('');
  }

  private setDataSourceList(list: any[]) {
    this.dataSource = new MatTableDataSource(list);
    this.dataSource.sort = this.sort;
  }



  eliminar(element:any){
    this.selectedList = _.reject(this.selectedList, supply => {
      return supply.id === element.id;
    });
    this.setDataSourceList(this.selectedList);
  }
}
