import { CookingScheduleRecipe } from '../models/cooking-schedule-recipe..model';
import { Recipe } from '../../recipes/models/recipe.model';


export class CookingScheduleModelMapper {


    public static getRecipeSelectedFromModel(recipe: Recipe): CookingScheduleRecipe {
        return {
            id: recipe.id,
            code: recipe.code,
            image: '',
            name: recipe.name,
            quantity: 1
        }
    }
}