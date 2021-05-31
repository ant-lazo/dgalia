import { MeasuredUnit } from "app/modules/measured-units/models/measured-unit.model";
import { ProductCategory } from "app/modules/product-category/models/product-category.interface";


export interface ResumeFormList {
    id: number;
    code: string;
    name: string;
    quantity: number;
    category: ProductCategory;
    measuredUnit: MeasuredUnit;
    estimatedPrice: number;
    equivalentQuantity: number;
    enquivalentMeasuredUnitCode: string;
}