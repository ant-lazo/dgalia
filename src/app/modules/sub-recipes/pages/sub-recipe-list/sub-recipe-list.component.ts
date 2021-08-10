import { Component, OnInit } from '@angular/core';
import { RowAppButtonModel, RowButtonType } from 'app/shared/row-buttons/models/row-nutton.model';
import { SubRecipe } from '../../models/sub-recipe.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SubReciperService } from '../../services/sub-reciper.service';
import { AppNotificationsService } from '../../../../shared/Services/app-notifications.service';
import { map } from 'rxjs/operators';
import { DeleteAlertComponent } from '../../../../shared/delete-alert/delete-alert.component';

@Component({
  selector: 'app-sub-recipe-list',
  templateUrl: './sub-recipe-list.component.html',
  styleUrls: ['./sub-recipe-list.component.scss']
})
export class SubRecipeListComponent implements OnInit {

  public subRecipeListRequest: Observable<SubRecipe[]>;
  public registerButton: RowAppButtonModel[];
  public subRecipeList: SubRecipe[] = [];
  public subRecipeFilteredList: SubRecipe[] = [];

  constructor(
    private _subRecipe: SubReciperService,
    private _router: Router,
    private dialog: MatDialog,
    private _appNotifications: AppNotificationsService
  ) { }

  ngOnInit(): void {
    this.buildRegisterButton();
    this.setSubRecipeList();
  }

  public redirectToRegisterPage(): void {
    this._router.navigate(['sub-recetas/registro'])
  }

  public filterByName(name: string): void {
    const list = [...this.subRecipeList];
    this.subRecipeFilteredList = [];
    const founded = list.filter(e => e.name.toUpperCase().includes(name.toUpperCase()));
    this.subRecipeFilteredList = founded;
  }

  public setSubRecipeList(): void {
    this.subRecipeListRequest = this._subRecipe.getAllSubRecipes().pipe(map((list: SubRecipe[]) => {
      this.subRecipeFilteredList = list;
      this.subRecipeList = list;
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

  public validationToDeleteSubRecipe(supply: SubRecipe): void {
    const dialogRef = this.dialog.open(DeleteAlertComponent, {
      width: '600px',
      height: '400px',
      data: { title: `la Sub receta ${supply.name}` }
    });

    dialogRef.afterClosed().subscribe(result => result ? this.deleteSubRecipe(supply.id) : null);
  }

  private deleteSubRecipe(id: number): void {
    this._subRecipe.delete(id).subscribe(resp => {
      this._appNotifications.deleteSuccess(null, resp.message);
      this.setSubRecipeList();
    });
  }

  editar(event: any) {
    this._router.navigate(['sub-recetas/editar/' + event.id]);
  }

  detalle(event: any) {
    this._router.navigate(['sub-recetas/detalle/' + event.id]);
  }


}
