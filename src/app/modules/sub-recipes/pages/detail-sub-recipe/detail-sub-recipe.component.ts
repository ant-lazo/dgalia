import { Component, OnInit } from '@angular/core';
import { SubRecipe } from '../../models/sub-recipe.model';
import { Observable } from 'rxjs';
import { SubRecipeSelectedSupply } from '../../models/sub-recipe-selected-supply';
import { SubReciperService } from '../../services/sub-reciper.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SubRecipeSelectedSupplyMapper } from '../../mappers/sub-recipe-selected-supply.mapper';

@Component({
  selector: 'app-detail-sub-recipe',
  templateUrl: './detail-sub-recipe.component.html',
  styleUrls: ['./detail-sub-recipe.component.scss']
})
export class DetailSubRecipeComponent implements OnInit {

  public subRecipe: Observable<SubRecipe>;
  public suppliesSelected: SubRecipeSelectedSupply[];
  private suppliesselectedMapper: SubRecipeSelectedSupplyMapper;

  constructor(
    public _subRecipe: SubReciperService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.suppliesselectedMapper = new SubRecipeSelectedSupplyMapper();
  }

  ngOnInit(): void {
    this.setRecipe();
  }

  private get id(): number {
    return Number(this._activatedRoute.snapshot.paramMap.get('id'));
  }

  private setRecipe(): void {
    this.subRecipe = this._subRecipe.findById(this.id).pipe(map((subRecipe: SubRecipe) => {
      this.suppliesSelected = this.suppliesselectedMapper.getFromRecipedetail(subRecipe.detail);
      return subRecipe;
    }))
  }
}
