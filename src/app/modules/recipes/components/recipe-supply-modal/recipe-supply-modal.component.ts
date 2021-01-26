import { Component, OnInit, ViewChild } from '@angular/core';
import { SupplyService } from '../../../supply/services/supply-service.service';
import { Observable } from 'rxjs';
import { Supply } from '../../../supply/models/supply';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-recipe-supply-modal',
  templateUrl: './recipe-supply-modal.component.html',
  styleUrls: ['./recipe-supply-modal.component.scss']
})
export class RecipeSupplyModalComponent implements OnInit {

  public filteredOptions: Observable<Supply[]>;
  public supplyList: Supply[] = [];
  public searchParam = new FormControl();
  public selectedList: Supply[] = [];


  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public displayedColumns: string[] = ['image', 'code', 'name', 'category', 'measuredUnit', 'actions'];
  public dataSource: MatTableDataSource<Supply> = new MatTableDataSource([]);


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
    if (founded) {
      this.selectedList.push(founded);
      this.setDataSourceList(this.selectedList);
    }
    this.searchParam.setValue('');
  }

  private setDataSourceList(list: any[]) {
    this.dataSource = new MatTableDataSource(list);
    this.dataSource.sort = this.sort;
  }

  print() {
    console.log(this.selectedList);

  }


}
