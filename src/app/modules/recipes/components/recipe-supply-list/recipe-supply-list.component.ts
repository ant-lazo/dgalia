import { Component, OnInit, ViewChild } from '@angular/core';
import { RowAppButtonModel, RowButtonType } from 'app/shared/row-buttons/models/row-nutton.model';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { RecipeSupplyModalComponent } from '../recipe-supply-modal/recipe-supply-modal.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Supply } from 'app/modules/supply/models/supply';
import * as _ from 'underscore';

@Component({
  selector: 'recipe-supply-list',
  templateUrl: './recipe-supply-list.component.html',
  styleUrls: ['./recipe-supply-list.component.scss']
})
export class RecipeSupplyListComponent implements OnInit {

  public addButtons: RowAppButtonModel[];
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public displayedColumns: string[] = ['image', 'code', 'name', 'category', 'measuredUnit', 'cantidad', 'actions'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  listSupply = [];
  constructor(
    private _matDialog: MatDialog
  ) { 
  }


  ngOnInit(): void {
    this.buildAddSupplyButton()
  }

  public showAddSupplyModel() {
    const dialogRef = this._matDialog.open(RecipeSupplyModalComponent, {
      width: '850px',
      height: '650px'
    });

    dialogRef.afterClosed().subscribe(value => {
      if(value) {
        this.listSupply = value;
        this.setDataSourceList(this.listSupply);
      }
    });
  }

  private buildAddSupplyButton() {
    this.addButtons = [
      new RowAppButtonModel({
        action: 'add',
        color: 'primary',
        icon: 'add_circle_outline',
        label: 'Añadir insumo',
        type: RowButtonType.Stroked
      }),
    ];
  }
  private setDataSourceList(list: any[]) {
    this.dataSource = new MatTableDataSource(list);
    this.dataSource.sort = this.sort;
  }

  eliminar(element:any){
    this.listSupply = _.reject(this.listSupply, supply => {
      return supply.id === element.id;
    });
    this.setDataSourceList(this.listSupply);
  }
}
