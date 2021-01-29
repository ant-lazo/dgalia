
export interface Recipe {
    id: number;
    name: string;
    code: string;
    description: string;
    price: string;
    cost: string;
    enabled: boolean;
    headquarter: Headquarter;
    course: Course;
    term: Course;
    createdBy: CreatedBy;
    updatedBy: CreatedBy;
    createdAt: string;
    updatedAt: string;
    detail: any[];
}

interface CreatedBy {
    id: number;
    fullname: string;
}

interface Course {
    id: number;
    name: string;
}

interface Headquarter {
    id: number;
    name: string;
    description: string;
    address: string;
    personInCharge: string;
    enabled: boolean;
}