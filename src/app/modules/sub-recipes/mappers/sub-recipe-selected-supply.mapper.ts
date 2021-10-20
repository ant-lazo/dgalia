import { SubRecipeSelectedSupply } from "../models/sub-recipe-selected-supply";
import { SubRecipeDetail } from "../models/sub-recipe.model";

export class SubRecipeSelectedSupplyMapper {

    public getFromRecipedetail = (detail: SubRecipeDetail[]): SubRecipeSelectedSupply[] => detail.map((e: SubRecipeDetail) => {
        return new SubRecipeSelectedSupply(
            e.supply.id,
            e.supply.code,
            e.supply.name,
            e.supply.category.name,
            e.supply.measuredUnit.name,
            Number(e.quantity),
            e.supply.measuredUnit.id);
    });
}