import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReciperService } from '../../services/reciper.service';
import { EditRecipeForm } from '../../models/edit-recipe-form.model';
import { Supply } from 'app/modules/supply/models/supply';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {

  public recipe: Recipe;
  private id:number;
  public getComponentsData: boolean;

  public suppliesSelectedList: any[];
  public editRecipeForm: EditRecipeForm;
  public dataCompleted: boolean;

  constructor(
    public _recipe: ReciperService,
    private _toast: ToastrService,
    private _router: Router,
    route: ActivatedRoute
  ) {
    this.id = Number(route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this._recipe.findById(this.id).subscribe(recipe => {
      this.recipe = recipe;
    });
  }

  public compleData() {
    this.getComponentsData = !this.getComponentsData;
  }

  public setCompleteData(list: Supply[], form: EditRecipeForm): void {
    if (list && list.length > 0) this.suppliesSelectedList = list;
    if (form) {
      this.editRecipeForm = form;
      this.editRecipeForm.id = this.id;
    } 

    if (this.editRecipeForm && this.suppliesSelectedList) {
      this.dataCompleted = !this.dataCompleted;
      this.editRecipe();
    }
  }


  public editRecipe() {
    if (this.dataCompleted) {
      this.editRecipeForm.detail = this.suppliesSelectedList.map(e => { return { supplyId: e.id, measuredUnitId: e.measuredUnit.id, quantity: e.quantity } })
      this._recipe.editRecipe(this.editRecipeForm).subscribe(result => {
        this._toast.success(result.message, 'Actualizado exitoso');
        this._router.navigate(['recetas/listado']);
      });
    }
  }

}
