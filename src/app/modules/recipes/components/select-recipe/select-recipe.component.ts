import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Recipe } from '../../models/recipe.model';
import { ReciperService } from '../../services/reciper.service';

@Component({
  selector: 'app-select-recipe',
  templateUrl: './select-recipe.component.html',
  styles: [
  ]
})
export class SelectRecipeComponent implements OnInit {

  public list: Recipe[] = [];

  constructor(
    private _dialogRef: MatDialogRef<SelectRecipeComponent>,
    private _recipes: ReciperService
  ) { }

  ngOnInit(): void {
  }

  public onClose(value?: Recipe): void {
    this._dialogRef.close(value);
  }

  public listenSearchBoxParam(param: string): void {
    this._recipes.findByName(param).subscribe((list: Recipe[]) => {
      this.list = list;
    })
  }

}
