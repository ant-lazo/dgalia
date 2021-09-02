
export interface Supply {
    id: number;
    code: string;
    name: string;
    category: Category;
    enabled: boolean;
    measuredUnit: MeasuredUnit;
    createdAt: Date;
    updatedAt: Date;
    estimatedPrice: number;
    lossPercentage: number;
}

interface MeasuredUnit {
    id: number;
    code: string;
    name: string;
    enabled: boolean;
}

interface Category {
    id: number;
    name: string;
    enabled: boolean;
}