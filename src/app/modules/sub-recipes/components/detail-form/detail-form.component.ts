import { Component, OnInit, Input } from '@angular/core';
import { SubRecipe } from '../../models/sub-recipe.model';

@Component({
  selector: 'detail-sub-recipe-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailSubRecipeFormComponent implements OnInit {

  @Input() subRecipe: SubRecipe;

  constructor() { }

  ngOnInit(): void {
  }

}
