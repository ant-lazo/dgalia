import { Mapper } from "app/core/models/mapper.interface";
import { MeasureUnitMapper } from "app/modules/measured-units/services/mappers/measure-unit.mapper";
import { ProductCategoryMapper } from "app/modules/product-category/services/mappers/product-category.mapper";
import { CookingScheduleResumen } from "../../models/cooking-schedule-resumen.model";


export class CookingScheduleResumeMapper implements Mapper<CookingScheduleResumen> {

    fromJson = (json: any): CookingScheduleResumen => new CookingScheduleResumen({
        /*category: new ProductCategoryMapper().fromJson(json.category),
        measuredUnit: new MeasureUnitMapper().fromJson(json.measuredUnit),
        code: json.code,
        estimatedPrice: json.estimatedPrice,
        id: json.id,
        name: json.name,
        quantity: json.quantity*/

        id: json.id,
        code: json.code,
        name: json.name,
        quantityNeeded: json.quantityNeeded,
        quantityRecipe: json.quantityRecipe,
        stock: json.stock,
        category: new ProductCategoryMapper().fromJson(json.category),
        measuredUnit: new MeasureUnitMapper().fromJson(json.measuredUnit),
        estimatedPrice: json.estimatedPrice,
        losspercentage:json.losspercentage
        

    });


    toJson(doc: CookingScheduleResumen) {
        throw new Error("Method not implemented.");
    }

}