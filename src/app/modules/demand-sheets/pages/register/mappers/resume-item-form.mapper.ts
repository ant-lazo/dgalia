import { CookingScheduleResumen } from "app/modules/programation/models/cooking-schedule-resumen.model";
import { ResumeFormList } from "../models/resume-list-request-model";


export class ResumeItemFormMapper {

    //Los datos que vienen
    public fromResumeList(list: CookingScheduleResumen[]): ResumeFormList[] {
        const newList: ResumeFormList[] = [];
        for (const item of list) {
            newList.push({
                /*category: item.getCategory(),
                code: item.getCode(),
                enquivalentMeasuredUnitCode: null,
                equivalentQuantity: null,
                estimatedPrice: item.getEstimatedPrice(),
                id: item.getId(),
                measuredUnit: item.getMeasuredUnit(),
                name: item.getName(),
                quantity: item.getQuantity()*/
                id: item.getId(),
                code: item.getCode(),
                name: item.getName(),
                quantityNeeded: item.getQuantityNeeded(),
                quantityRecipe: item.getQuantityRecipe(),
                stock: item.getStock(),
                category: item.getCategory(),
                measuredUnit: item.getMeasuredUnit(),
                estimatedPrice: item.getEstimatedPrice(),
                losspercentage: item.getLossPercentage(),
                equivalentQuantity: null,
                enquivalentMeasuredUnitCode: null
                
            });
        }
        return newList
    }
}