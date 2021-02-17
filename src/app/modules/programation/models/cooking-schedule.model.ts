export interface CookingSchedule {
    id: number;
    note: string;
    description: string;
    completeDate: string;
    dateNumber: number;
    dateString: string;
    enabled: boolean;
    recipes: Recipe[];
    course: Course[];
    classes: Course[];
    term: Course;
    createdAt: string;
    updatedAt: string;
    createdBy: Course;
    updatedBy: Course;
    headquarter: Headquarter;
}

interface Headquarter {
    id: number;
    name: string;
    description: string;
    address: string;
    personInCharge: string;
    enabled: boolean;
}

interface Course {
    id: number;
    name: string;
}

interface Recipe {
    id: number;
    name: string;
    code: string;
    quantity: number;
}
