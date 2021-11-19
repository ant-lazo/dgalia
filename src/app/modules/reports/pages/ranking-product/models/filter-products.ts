
export interface FilterProduct {
    id: number;
    productId: number;
    productCode: string;
    productName: string;
    quantity: number;
    headquarter: Headquarter;
    updateDate: string;
    measuredUnit: MeasuredUnit
}

export interface Headquarter {
    id: number;
    name: string;
    description: string;
    address: string;
    personInCharge: string;
    email: string;
    enabled: boolean;
    color: string;
}

export interface MeasuredUnit {
    id: number;
    code: string;
    name: string;
    enabled: boolean;
}
