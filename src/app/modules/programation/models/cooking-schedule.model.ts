export interface CookingSchedule {
    id: number;
    code: string;
    note: string;
    description: string;
    startDate: Date;
    endDate: Date;
    enabled: boolean;
    recipes: CookingScheduleRecipe[];
    headquarter: Headquarter;
    createdAt: Date;
    createdBy: CreatedBy;
    updatedAt: Date;
    term: Term;
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

export interface CookingScheduleRecipe {
    recipeId: number;
    name: string;
    code: string;
    quantity: number;
    date: Date;
    className: string;
    classId: number;
    courseName: string;
    courseId: number;
}

interface Term {
    id: number;
    name: string;
    description: string;
    enabled: boolean;
}
