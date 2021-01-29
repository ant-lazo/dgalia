
export interface Supply {
    id: number;
    code: string;
    name: string;
    category: Category;
    enabled: boolean;
    measuredUnit: MeasuredUnit;
    createdAt: string;
    updatedAt?: string;
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