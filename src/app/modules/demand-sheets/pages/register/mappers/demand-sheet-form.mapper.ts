import { RqDemandSheetRegister } from "../models/demand-sheet-form.model";
import { ResumeFormList } from "../models/resume-list-request-model";

export class DemandSheetRegisterFormMapper {

    public static toRegister(data: {
        resumenList: ResumeFormList[],
        cookingScheduleId: number,
        headquarter_id: number
    }): RqDemandSheetRegister {
        return {
            cooking_schedule_id: data.cookingScheduleId,
            headquarter_id: data.headquarter_id,
            items: data.resumenList.map(e => {
                return {
                    equivalent_measuredunit: e.enquivalentMeasuredUnitCode,
                    equivalent_quantity: e.equivalentQuantity,
                    measuredunit_required: e.measuredUnit.code,
                    quantity_required: e.quantity,
                    supply_code: e.code,
                    unit_price: e.estimatedPrice
                }
            })
        }
    }
}