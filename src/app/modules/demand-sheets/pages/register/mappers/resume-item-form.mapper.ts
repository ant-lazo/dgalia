import { CookingScheduleResumen } from "app/modules/programation/models/cooking-schedule-resumen.model";
import { ResumeFormList } from "../models/resume-list-request-model";


export class ResumeItemFormMapper {

    public fromResumeList(list: CookingScheduleResumen[]): ResumeFormList[] {
        const newList: ResumeFormList[] = [];
        for (const item of list) {
            newList.push({
                category: item.getCategory(),
                code: item.getCode(),
                enquivalentMeasuredUnitCode: null,
                equivalentQuantity: null,
                estimatedPrice: item.getEstimatedPrice(),
                id: item.getId(),
                measuredUnit: item.getMeasuredUnit(),
                name: item.getName(),
                quantity: item.getQuantity()
            });
        }
        return newList
    }
}