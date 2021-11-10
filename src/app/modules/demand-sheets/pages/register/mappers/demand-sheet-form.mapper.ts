import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RqDemandSheetRegister } from "../models/demand-sheet-form.model";
import { ResumeFormList } from "../models/resume-list-request-model";
//servicio para traer la lista
import { MeasuredUnitService } from 'app/modules/measured-units/services/measured-unit.service';
import { MeasuredUnit } from 'app/modules/measured-units/models/measured-unit.model';
import { Observable } from 'rxjs';
import { SupplyListComponent } from '../components/supply-list/supply-list.component';


//el que se envia
export class DemandSheetRegisterFormMapper {

    public measureUnitList: Observable<MeasuredUnit[]>;

    lista : MeasuredUnit[];


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
                    //Aqui hay que hacer la filtracion

                    equivalent_measuredunit: e.measuredUnit.code,
                    equivalent_quantity: e.quantityNeeded,
                    /*measuredunit_required: e.measuredUnit,*/
                    quantity_required: e.quantityRecipe,
                    supply_code: e.code,
                    unit_price: e.estimatedPrice
                    
                    /*supply_id:e.id,
                    supply_code: e.code,
                    supply_name: e.name,
                    equivalent_quantity: e.quantityNeeded,
                    quantity_required: e.quantityRecipe,
                    supply_stock: e.stock,
                    supply_category: e.category,
                    equivalent_measuredunit: e.measuredUnit,
                    unit_price: e.estimatedPrice,
                    percentage_loss: e.losspercentage*/
                
                    /*id: number,
                    code: string,
                    name: string,
                    quantityNeeded: number,
                    quantityRecipe: number,
                    stock: number,
                    category: ProductCategory;
                    measuredUnit: MeasuredUnit;
                    estimatedPrice: number,
                    losspercentage: number*/

                }
            })
        }
    }

    //metodo de filtracion de nombre por codigo

    public changeNametoCode( name: string): string {

        //SupplyListComponent.
        return "";
    }


}