

export interface CookingSchedule {
    id: number;
    note: string;
    description: string;
    completeDate: string;
    dateNumber: number;
    dateString: string;
    enabled: boolean;
    recipes: any[];
    course: any[];
    classes: any[];
    term: Term;
    createdAt: string;
    updatedAt: string;
    createdBy: Term;
    updatedBy: Term;
}

interface Term {
    id: number;
    name: string;
}