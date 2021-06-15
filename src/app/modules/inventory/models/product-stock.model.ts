import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';

export interface ProductStock {
    id: number;
    productId: number;
    productCode: string;
    productName: string;
    quantity: number;
    headquarter: Headquarter;
    updateDate: Date;
}


