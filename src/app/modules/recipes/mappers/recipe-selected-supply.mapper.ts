import { RecipeSelectedSupply } from "../models/recipe-selected-supply";
import { RecipeDetail } from "../models/recipe.model";

export class RecipeSelectedSupplyMapper {

    public getFromRecipedetail = (detail: RecipeDetail[]) : RecipeSelectedSupply[] => detail.map((e: RecipeDetail) =>  {
        return new RecipeSelectedSupply(
            e.supply.id,
            e.supply.code,
            e.supply.name,
            e.supply.category.name,
            e.supply.measuredUnit.name,
            Number(e.quantity),
            e.supply.measuredUnit.id        );
    });
}