import { MeasuredUnit } from 'app/modules/measured-units/models/measured-unit.model';
import { ProductInventory } from './product-inventory.model';

export interface ProductKardex {
    transfer: number;
    loss: number;
    inputs: number;
    stock: number;
    outputs: number;
    productName: string;
    productCode: string;
    headquarterId: number;
    headquarterName: string;
    inventory: ProductInventory[];
    measuredUnit: MeasuredUnit;
}
