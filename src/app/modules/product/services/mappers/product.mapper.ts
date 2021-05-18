import { Mapper } from "app/core/models/mapper.interface";
import { MeasureUnitMapper } from "app/modules/measured-units/services/mappers/measure-unit.mapper";
import { UserInfoMapper } from "app/modules/user/services/mappers/user-info.mapper";
import { Product } from "../../models/product.model";

export class ProductMapper implements Mapper<Product> {
    fromJson(json: any): Product {
        return new Product({
            id: json.id,
            code: json.code,
            name: json.name,
            description: json.description,
            urlImage: json.urlImage,
            weight: json.weight,
            category: json.category,
            measureUnit: new MeasureUnitMapper().fromJson(json.measureUnit),
            igv: json.igv,
            priceList: json.priceList,
            salePrice: json.salePrice,
            supplyId: json.supplyId,
            supplyName: json.supplyName,
            createdAt: json.createdAt,
            updatedAt: json.updatedAt,
            createdby: new UserInfoMapper().fromJson(json.createdby),
            enabled: json.enabled,
        });
    }
    toJson(doc: Product) {
        throw new Error("Method not implemented.");
    }

}