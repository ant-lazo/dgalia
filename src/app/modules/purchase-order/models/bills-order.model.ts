import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { Product } from 'app/modules/product/models/product.model';
import { PurchaseOrder } from '../models/ purchase-order.model';
import { Provider } from 'app/modules/provider/models/provider';
import { UserInfo } from 'app/modules/user/models/user-info.model';


export interface BillsOrder {
    id: number;
    purchaseOrder:PurchaseOrder;
    invoiceStatus:InvoiceStatus,
    code: string;
    invoiceDate:string;
    dueDate:string;
    comments:string;
    paidDate:string;
    paidComments:string;
    createdBy:ByTemplate;
    createdAt:Date;
    updatedBy:ByTemplate;
    updatedAt: Date;
    providerDocument:string;

 
    /*cookingScheduleCode: null | string;
    demandsheetCode: null | string;
    provider: Provider;
    status: PurchaseOrderStatus;
    headquarter: Headquarter;
    DateExperition:Date;
    DatePayment:Date;
    createdAt: Date;
    updatedAt: Date;
    createdBy: UserInfo;
    products: PurchaseOrderProduct[];
    comments: string;
    enabled: boolean;
    subTotal: number;
    igv: number;
    total: number;
    updatedBy: UserInfo;*/
}
export interface ByTemplate{
    id:number;
    fullName:string;
    email:string;
}
export interface InvoiceStatus{
    id:number;
    code:string;
    name:string;
    description : string;
}
export interface PurchaseOrderStatus {
    id?: number;
    code: string;
    name: string;
    description: string;
}

export interface PurchaseOrderProduct {
    product: Product;
    quantity: number;
    unitPrice: number;
    igv: number;
    subTotal: number;
    total: number;
}
