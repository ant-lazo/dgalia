import { Component, ViewChild, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { RowAppButtonModel, RowButtonType } from 'app/shared/row-buttons/models/row-nutton.model';
import { MatDialog } from '@angular/material/dialog';
import { RecipeSupplyModalComponent } from '../recipe-supply-modal/recipe-supply-modal.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'underscore';
import { ToastrService } from 'ngx-toastr';
import { Supply } from 'app/modules/supply/models/supply';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'recipe-supply-list',
  templateUrl: './recipe-supply-list.component.html',
  styleUrls: ['./recipe-supply-list.component.scss']
})
export class RecipeSupplyListComponent implements OnChanges {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input() eliminarButtom: boolean = true;

  
  @Output() completeList: EventEmitter<Supply[]> = new EventEmitter();
  @Input() trigger: boolean;
  @Input() recipe: Observable<Recipe>;

  public listSupply: any[] = [];
  public addButtons: RowAppButtonModel[];
  public displayedColumns: string[] =['image', 'code', 'name', 'category', 'measuredUnit', 'quantity', 'actions'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource([]);

  constructor(
    private _matDialog: MatDialog,
    private _toast: ToastrService
  ) {
    this.buildAddSupplyButton()
  }

  ngOnChanges() {
    if (this.trigger && this.listSupply.length === 0) this._toast.error('Debe seleccionar como minimo un insumo', 'Error en insumos')
    if (this.trigger && this.listSupply && this.listSupply.length > 0) this.completeList.emit(this.listSupply);
    this.recipe.subscribe(element => {  
      var linea:any = {};
      for(const sup of element.detail){
        linea = sup.supply;
        linea.quantity = sup.quantity;
        this.listSupply.push(linea);
      }
      this.setDataSourceList(this.listSupply);
    });
  }


  public showAddSupplyModel() {
    const dialogRef = this._matDialog.open(RecipeSupplyModalComponent, {
      width: '850px',
      height: '650px'
    });

    dialogRef.afterClosed().subscribe(value => {
      if (value) {
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

  eliminar(element: any) {
    this.listSupply = _.reject(this.listSupply, supply => {
      return supply.id === element.id;
    });
    this.setDataSourceList(this.listSupply);
  }
}
