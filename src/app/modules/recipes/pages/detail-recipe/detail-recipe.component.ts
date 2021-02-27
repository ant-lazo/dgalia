import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../course/services/courses.service';
import { Observable } from 'rxjs';
import { Course } from 'app/modules/course/models/course.interface';
import { Headquarter } from '../../../headquarter/models/headquarter.model';
import { HeadquartesService } from '../../../headquarter/services/headquartes.service';
import { Term } from '../../../term/models/term.interface';
import { TermsService } from '../../../term/services/terms.service';
import { ReciperService } from '../../services/reciper.service';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeSelectedSupply } from '../../models/recipe-selected-supply';
import { RecipeSelectedSupplyMapper } from '../../mappers/recipe-selected-supply.mapper';

@Component({
  selector: 'app-detail-recipe',
  templateUrl: './detail-recipe.component.html',
  styleUrls: ['./detail-recipe.component.scss']
})
export class DetailRecipeComponent implements OnInit {

  public recipe: Recipe;
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
    this._recipe.findById(this.id).subscribe((recipe: Recipe) => {
      this.recipe = recipe;
      this.suppliesSelected = this.suppliesselectedMapper.getFromRecipedetail(recipe.detail);
    });
  }

}
