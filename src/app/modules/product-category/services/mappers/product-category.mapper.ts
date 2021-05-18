import { Mapper } from "app/core/models/mapper.interface";
import { ProductCategory } from "../../models/product-category.interface";

export class ProductCategoryMapper implements Mapper<ProductCategory> {
    fromJson(json: any): ProductCategory {
        throw new Error("Method not implemented.");
    }
    toJson(doc: ProductCategory) {
        throw new Error("Method not implemented.");
    }

}