import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteAlertComponent } from 'app/shared/delete-alert/delete-alert.component';
import { RowAppButtonModel, RowButtonType } from 'app/shared/row-buttons/models/row-nutton.model';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from '../../models/recipe.model';
import { ReciperService } from '../../services/reciper.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  public recipeListRequest: Observable<Recipe[]>;
  public registerButton: RowAppButtonModel[];
  public recipeList: Recipe[] = [];
  public recipeFilteredList: Recipe[] = [];

  constructor(
    private _recipe: ReciperService,
    private _router: Router,
    private dialog: MatDialog,
    private _appNotifications: AppNotificationsService
  ) { }

  ngOnInit(): void {
    this.buildRegisterButton();
    this.setRecipeList();
  }

  public redirectToRegisterPage(): void {
    this._router.navigate(['recetas/registro'])
  }

  public filterByName(name: string): void {
    const list = [...this.recipeList];
    this.recipeFilteredList = [];
    const founded = list.filter(e => e.name.toUpperCase().includes(name.toUpperCase()));
    this.recipeFilteredList = founded;
  }

  public setRecipeList(): void {
    this.recipeListRequest = this._recipe.getAllRecipes().pipe(map((list: Recipe[]) => {
      this.recipeFilteredList = list;
      this.recipeList = list;
      return list;
    }))
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

  public validationToDeleteRecipe(supply: Recipe): void {
    const dialogRef = this.dialog.open(DeleteAlertComponent, {
      width: '600px',
      height: '400px',
      data: { title: `la Receta ${supply.name}` }
    });

    dialogRef.afterClosed().subscribe(result => result ? this.deleteRecipe(supply.id) : null);
  }

  private deleteRecipe(id: number): void {
    this._recipe.delete(id).subscribe(resp => {
      this._appNotifications.deleteSuccess(null, resp.message);
      this.setRecipeList();
    });
  }

  editar(event: any) {
    this._router.navigate(['recetas/editar/' + event.id]);
  }

  detalle(event: any) {
    this._router.navigate(['recetas/detalle/' + event.id]);
  }
}
