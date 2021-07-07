export interface CookingScheduleRegisterForm {
    note: string;
    description: string;
    date: string;
    recipes: Recipe[];
    courses: number[];
    classes: number[];
    term_id: number;
    headquarter_id: number;
}



interface Recipe {
    id: number;
    quantity: number;
}