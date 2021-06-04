import { MeasuredUnit } from "app/modules/measured-units/models/measured-unit.model";
import { ProductCategory } from "app/modules/product-category/models/product-category.interface";

export class CookingScheduleResumen {

    private id: number;
    private code: string;
    private name: string;
    private quantity: number;
    private category: ProductCategory;
    private measuredUnit: MeasuredUnit;
    private estimatedPrice: number;

    constructor(data: {
        id: number,
        code: string,
        name: string,
        quantity: number,
        category: ProductCategory,
        measuredUnit: MeasuredUnit,
        estimatedPrice: number
    }) {
        this.id = data.id;
        this.code = data.code;
        this.name = data.name;
        this.quantity = data.quantity;
        this.category = data.category;
        this.measuredUnit = data.measuredUnit;
        this.estimatedPrice = data.estimatedPrice;
    }

    public getId(): number {
        return this.id;
    }

    public getCode(): string {
        return this.code;
    }

    public getName(): string {
        return this.name;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public getCategory(): ProductCategory {
        return this.category;
    }

    public getMeasuredUnit(): MeasuredUnit {
        return this.measuredUnit;
    }

    public getEstimatedPrice(): number {
        return this.estimatedPrice;
    }

}