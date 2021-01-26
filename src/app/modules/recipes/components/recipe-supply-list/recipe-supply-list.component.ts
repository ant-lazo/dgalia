import { Component, OnInit } from '@angular/core';
import { RowAppButtonModel, RowButtonType } from 'app/shared/row-buttons/models/row-nutton.model';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { RecipeSupplyModalComponent } from '../recipe-supply-modal/recipe-supply-modal.component';

@Component({
  selector: 'recipe-supply-list',
  templateUrl: './recipe-supply-list.component.html',
  styleUrls: ['./recipe-supply-list.component.scss']
})
export class RecipeSupplyListComponent implements OnInit {

  public addButtons: RowAppButtonModel[];

  constructor(
    private _matDialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.buildAddSupplyButton()
  }

  public showAddSupplyModel() {
    const dialogRef = this._matDialog.open(RecipeSupplyModalComponent, {
      width: '850px',
      height: '650px'
    });

    dialogRef.afterClosed().subscribe(value => {

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

}
