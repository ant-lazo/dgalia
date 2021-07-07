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
}