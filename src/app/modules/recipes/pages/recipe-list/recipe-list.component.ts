import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RowAppButtonModel, RowButtonType } from 'app/shared/row-buttons/models/row-nutton.model';
import { ReciperService } from '../../services/reciper.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  public registerButton: RowAppButtonModel[];
  public recipeList: any[] = [];
  public recipeFilteredList: any[] = [];

  constructor(
    private _recipe: ReciperService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.buildRegisterButton();
    this.setRecipeList();
  }

  public redirectToRegisterPage(): void {
    this._router.navigate(['recetas/registro'])
  }

  public filterByName(name: string): void {

  }

  public setRecipeList(): void {
    this._recipe.getAllRecipes().subscribe(recipes => {
      this.recipeFilteredList = recipes;
      this.recipeList = recipes;
    })
  }

  public buildRegisterButton(): void {
    this.registerButton = [
      new RowAppButtonModel({
        action: 'register',
        color: 'primary',
        icon: 'save',
        label: 'Registrar',
        type: RowButtonType.Stroked
      }),
    ];
  }


}
