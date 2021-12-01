import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { MeasuredUnit } from 'app/modules/measured-units/models/measured-unit.model';

export interface ProductStockValoration {
    id: number;
    productId: number;
    productCode: string;
    productName: string;
    quantity: number;
    headquarter: Headquarter;
    measuredUnit: MeasuredUnit;
    stock: number;
    unitePrice: string;
    valoration: number;
}
