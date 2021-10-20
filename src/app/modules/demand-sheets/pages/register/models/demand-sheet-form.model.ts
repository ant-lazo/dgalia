export interface RqDemandSheetRegister {
    cooking_schedule_id: number;
    headquarter_id: number;
    items: RqDemandSheetItemRegister[];
}

export interface RqDemandSheetItemRegister {
    equivalent_measuredunit: string;
    equivalent_quantity: number;
    quantity_required: number;
    supply_code: string;
    unit_price: number;
    /*supply_id: number;
    supply_code: string;
    supply_name: string;
    equivalent_quantity: number;
    quantity_required: number;
    supply_stock: number;
    supply_category: any;
    equivalent_measuredunit: any;
    unit_price: number;
    percentage_loss: number*/
}