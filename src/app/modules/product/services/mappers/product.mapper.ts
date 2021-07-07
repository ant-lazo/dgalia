import { Mapper } from "app/core/models/mapper.interface";
import { MeasureUnitMapper } from "app/modules/measured-units/services/mappers/measure-unit.mapper";
import { UserInfoMapper } from "app/modules/user/services/mappers/user-info.mapper";
import { RegisterProductFormModel } from "../../models/form-models/register-product-form.model";
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
            supplyCode: json.supplyCode,
        });
    }
    toJson(doc: Product) {
        throw new Error("Method not implemented.");
    }

    public static formDataToRegister(model: RegisterProductFormModel, code?: string): FormData {
        const form: FormData = new FormData();
        form.append('name', model.name);
        form.append('description', model.description);
        form.append('category_id', model.category_id);
        form.append('measure_unit_id', model.measure_unit_id);
        form.append('igv', model.igv);
        form.append('price_list', model.price_list);
        form.append('weight', model.weight);
        form.append('image', model.image);
        form.append('supply_id', model.supply_id);
        form.append('sale_price', model.sale_price);
        if (code) form.append('code', code);
        return form;
    }
}