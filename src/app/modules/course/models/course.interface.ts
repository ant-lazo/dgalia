

export interface Course {
    id: number;
    name: string;
    description: string;
    enabled: boolean;
    term: Term;
}

interface Term {
    id: number;
    name: string;
    description: string;
    enabled: boolean;
}