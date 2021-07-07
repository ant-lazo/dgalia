
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
    detail: RecipeDetail[];
}


  export interface RecipeDetail {
    id: number;
    supply: Supply;
    quantity: string;
    measuredUnit: Course;
    enabled: boolean;
  }
  
  interface Supply {
    id: number;
    code: string;
    name: string;
    category: Course;
    measuredUnit: Course;
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
    color: string;
  }