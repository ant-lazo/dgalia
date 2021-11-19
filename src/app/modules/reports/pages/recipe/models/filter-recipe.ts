
export interface FilterRecipe {
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
}

export interface Course{
    id: number;
    name: string;
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

interface CreatedBy {
    id: number;
    fullname: string;
  }
