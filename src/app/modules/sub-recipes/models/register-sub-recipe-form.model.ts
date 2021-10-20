

export interface RegisterSubRecipeForm {
    name: string;
    description: string;
    code: string;
    price: number;
    cost: number;
    headquarter_id: number;
    course_id: number;
    term_id: number;
    detail: { supplyId: number, quantity: number, measuredUnitId: number, }[];
}