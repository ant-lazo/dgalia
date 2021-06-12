export interface PoRqRegisterForm {
    provider_code: string;
    is_draft: boolean;
    demand_sheet_code: string;
    headquarter_id: number;
    products: PoRqRegisterFormItem[];
    comments: string;
}

interface PoRqRegisterFormItem {
    product_code: string;
    quantity: number;
    unit_price: number;
    igv: number;
}