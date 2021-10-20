import { MeasuredUnit } from "app/modules/measured-units/models/measured-unit.model";
import { ProductCategory } from "app/modules/product-category/models/product-category.interface";

export class CookingScheduleResumen {

    /*private id: number;
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
    }*/

    private id: number;
    private code: string;
    private name: string;
    private quantityNeeded: number;
    private quantityRecipe: number;
    private stock:number;
    private category: ProductCategory;
    private measuredUnit: MeasuredUnit;
    private estimatedPrice: number;
    private losspercentage: number

    constructor(data: {
        id: number,
        code: string,
        name: string,
        quantityNeeded: number,
        quantityRecipe: number,
        stock:number,
        category: ProductCategory,
        measuredUnit: MeasuredUnit,
        estimatedPrice: number
        losspercentage:number
    }) {
        this.id = data.id;
        this.code = data.code;
        this.name = data.name;
        this.quantityNeeded = data.quantityNeeded;
        this.quantityRecipe = data.quantityRecipe;
        this.stock=data.stock;
        this.category = data.category;
        this.measuredUnit = data.measuredUnit;
        this.estimatedPrice = data.estimatedPrice;
        this.losspercentage = data.losspercentage;
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

    public getQuantityNeeded(): number {
        return this.quantityNeeded;
    }

    public getQuantityRecipe(): number {
        return this.quantityRecipe;
    }

    public getStock(): number {
        return this.stock;
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

    public getLossPercentage(): number {
        return this.losspercentage;
    }

}