import { ProductInventory } from './product-inventory.model';

export interface ProductKardex {
    transfer: number;
    loss: number;
    inputs: number;
    stock: number;
    outputs: number;
    productName: string;
    productCode: string;
    inventory: ProductInventory[];
}
