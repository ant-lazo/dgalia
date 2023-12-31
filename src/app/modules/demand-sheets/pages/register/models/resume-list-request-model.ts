import { MeasuredUnit } from "app/modules/measured-units/models/measured-unit.model";
import { ProductCategory } from "app/modules/product-category/models/product-category.interface";


export interface ResumeFormList {
    id: number;
    code: string;
    name: string;
    quantityNeeded: number,
    quantityRecipe: number,
    category: ProductCategory;
    measuredUnit: MeasuredUnit;
    estimatedPrice: number;
    equivalentQuantity: number;
    enquivalentMeasuredUnitCode: string;
    stock:number;
    losspercentage:number;

    /*id: number,
    code: string,
    name: string,
    quantityNeeded: number,
    quantityRecipe: number,
    stock: number,
    category: ProductCategory;
    measuredUnit: MeasuredUnit;
    estimatedPrice: number,
    losspercentage: number*/
}