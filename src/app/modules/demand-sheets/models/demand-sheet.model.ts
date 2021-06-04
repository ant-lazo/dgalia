
export interface DemandSheet {
    id: number;
    code: string;
    cookingScheduleCode: string;
    startDate: Date;
    endDate: Date;
    headquarter: Headquarter;
    isExpired: boolean;
    enabled: boolean;
    createdAt: Date;
    updatedAt: Date;
    createdBy: CreatedBy;
    updatedBy: CreatedBy;
    items: DemandSheetItem[];
}

interface CreatedBy {
    id: number;
    fullname: string;
    email: string;
}

interface Headquarter {
    id: number;
    name: string;
    description: string;
    address: string;
    personInCharge: string;
    enabled: boolean;
    color: string;
}

export interface DemandSheetItem {
    supplyCode: string;
    supplyId: number;
    supplyName: string;
    quantityRequired: number;
    measuredunitRequired: EquivalentMeasuredunit;
    equivalentQuantity: null;
    equivalentMeasuredunit: EquivalentMeasuredunit;
    unitPrice: number;
    total: number;
}

interface EquivalentMeasuredunit {
    id: number;
    code: string;
    name: string;
    enabled: boolean;
}
