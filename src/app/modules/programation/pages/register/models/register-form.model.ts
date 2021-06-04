export interface RegisterPrgFormModel {
    note: string;
    description: string;
    start_date: string;
    end_date: string;
    recipes: RegisterPrgRecipeFormModel[];
    term_id: number;
    headquarter_id: number;
}

export interface RegisterPrgRecipeFormModel {
    id: number;
    quantity: number;
    class_id: number;
    course_id: number;
    date: string;
}

export interface RegisterPrgRecipeSelectedModel {
    code: string;
    id: number;
    name: string;
    quantity: number;
    class_id: number;
    course_id: number;
    date: string;
}