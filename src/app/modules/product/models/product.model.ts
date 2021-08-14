import { MeasuredUnit } from "app/modules/measured-units/models/measured-unit.model";
import { ProductCategory } from "app/modules/product-category/models/product-category.interface";
import { UserInfo } from "app/modules/user/models/user-info.model";

export class Product {
    public id: number;
    public code: string;
    public name: string;
    public description: string;
    public urlImage: string;
    public weight: number;
    public category: ProductCategory;
    public measureUnit: MeasuredUnit;
    public igv: number;
    public priceList: number;
    public salePrice: number;
    public supplyId: number | undefined;
    public supplyName?: string;
    public createdAt: Date;
    public updatedAt: Date;
    public createdby: UserInfo;
    public enabled: boolean;
    public supplyCode: string;
    public minimumStock: string;

    constructor(data: {
        id: number,
        code: string,
        name: string,
        description: string,
        urlImage: string,
        weight: number,
        category: ProductCategory,
        measureUnit: MeasuredUnit,
        igv: number,
        priceList: number,
        salePrice: number,
        supplyId: number | undefined,
        supplyName?: string,
        createdAt: Date,
        updatedAt: Date,
        createdby: UserInfo,
        enabled: boolean,
        supplyCode: string,
        minimumStock: string,
    }) {
        this.id = data.id;
        this.code = data.code;
        this.name = data.name;
        this.description = data.description;
        this.urlImage = data.urlImage;
        this.weight = data.weight;
        this.category = data.category;
        this.measureUnit = data.measureUnit;
        this.igv = data.igv;
        this.priceList = data.priceList;
        this.salePrice = data.salePrice;
        this.supplyId = data.supplyId;
        this.supplyName = data.supplyName;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
        this.createdby = data.createdby;
        this.enabled = data.enabled;
        this.supplyCode = data.supplyCode;
        this.minimumStock = data.minimumStock;
    }
}
