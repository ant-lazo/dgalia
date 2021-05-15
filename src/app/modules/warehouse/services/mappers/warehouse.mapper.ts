import { Mapper } from "app/core/models/mapper.interface";
import { UserInfoMapper } from "app/modules/user/services/mappers/user-info.mapper";
import { Warehouse } from "../../models/warehouse.model";

export class WarehouseMapper implements Mapper<Warehouse> {
    fromJson(json: any): Warehouse {
        const userMapper: UserInfoMapper = new UserInfoMapper();
        return new Warehouse(
            json.id,
            json.code,
            json.name,
            json.description,
            json.location,
            json.headquarterId,
            json.headquarterName,
            json.responsable,
            json.createdAt,
            json.updatedAt,
            userMapper.fromJson(json.createdby),
            json.enabled,
        );
    }
    toJson(doc: Warehouse) {
        throw new Error("Method not implemented.");
    }

}