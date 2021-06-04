import { Mapper } from "app/core/models/mapper.interface";
import { MeasuredUnit } from "../../models/measured-unit.model";

export class MeasureUnitMapper implements Mapper<MeasuredUnit >{
    fromJson = (json: any): MeasuredUnit  => new MeasuredUnit({
        code: json.code,
        enabled: json.enabled ?? true,
        id: json.id,
        name: json.name
    }); 
    
    toJson(doc: MeasuredUnit) {
        throw new Error("Method not implemented.");
    }
    
}