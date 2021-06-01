
export interface DemandSheet {
    id: number;
    code: string;
    cookingScheduleCode: string;
    startDate: Date;
    endDate: Date;
    headquarter: Headquarter;
    isExpired: boolean;
    enabled: boolean;
    createdAt: Date;
    updatedAt: Date;
    createdBy: UserInfo;
    items: any[];
}

interface UserInfo {
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
