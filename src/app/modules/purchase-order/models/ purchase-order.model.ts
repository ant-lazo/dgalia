import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { Provider } from 'app/modules/provider/models/provider';
import { UserInfo } from 'app/modules/user/models/user-info.model';

export interface PurchaseOrder {
    id: number;
    code: string;
    cookingScheduleCode: null | string;
    demandsheetCode: null | string;
    provider: Provider;
    status: PurchaseOrderStatus;
    headquarter: Headquarter;
    createdAt: Date;
    updatedAt: Date;
    createdBy: UserInfo;
    products: any[];
    comments: string;
    enabled: boolean;
    subTotal: number;
    igv: number;
    total: number;
    updatedBy: UserInfo;
}

export interface PurchaseOrderStatus {
    id?: number;
    code: string;
    name: string;
    description: string;
}
