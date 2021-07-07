import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { UserInfo } from 'app/modules/user/models/user-info.model';

export interface ProductInventory {
    id: number;
    code: string;
    productId: number;
    productCode: string;
    productName: string;
    movementType: InventoryMovement;
    quantity: number;
    document: string;
    documentType: InventoryDocument;
    headquarter: Headquarter;
    unitPrice: number;
    igv: number;
    total: number;
    createdAt: Date;
    createdBy: UserInfo;
}

export interface InventoryMovement {
    id: string;
    code: string;
    name: string;
    description: string;
}

export interface InventoryDocument {
    id: string;
    code: string;
    name: string;
    description: string;
}