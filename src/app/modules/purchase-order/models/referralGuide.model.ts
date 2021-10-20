import { PurchaseOrder } from "./ purchase-order.model";

export interface ReferralGuide {
    id: number;
    emisionDate: string;
    driverName: string;
    purchaseOrder: PurchaseOrder;
    createdBy: any;
    createAt: string;
    updateBy: any;
    updateAt: string;
    comments: String;
}