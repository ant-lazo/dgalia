import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReciperService } from '../../services/reciper.service';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeSelectedSupply } from '../../models/recipe-selected-supply';
import { RecipeSelectedSupplyMapper } from '../../mappers/recipe-selected-supply.mapper';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detail-recipe',
  templateUrl: './detail-recipe.component.html',
  styleUrls: ['./detail-recipe.component.scss']
})
export class DetailRecipeComponent implements OnInit {

  public recipe: Observable<Recipe>;
  public suppliesSelected: RecipeSelectedSupply[];
  private suppliesselectedMapper: RecipeSelectedSupplyMapper;

  constructor(
    public _recipe: ReciperService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.suppliesselectedMapper = new RecipeSelectedSupplyMapper();
  }

  ngOnInit(): void {
    this.setRecipe();
  }

  private get id(): number {
    return Number(this._activatedRoute.snapshot.paramMap.get('id'));
  }

  private setRecipe(): void {
   this.recipe =  this._recipe.findById(this.id).pipe(map((recipe: Recipe) => {
    this.suppliesSelected = this.suppliesselectedMapper.getFromRecipedetail(recipe.detail);
    return recipe;
   }))
  }

}
