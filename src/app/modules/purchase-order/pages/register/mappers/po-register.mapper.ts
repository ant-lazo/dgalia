import { PoResumeModalRespData } from '../models/po-resume-modal-data.model';
import { PoRqRegisterForm } from '../models/po-rq-register-form.model';
import { RqPoSelectedItem } from '../models/po-selected-item.model';

export class PurchaseOrderRegisterMapper {

    public buildFoormData(data: {
        resume: PoResumeModalRespData
        items: RqPoSelectedItem[],
    }): PoRqRegisterForm {
        const form: PoRqRegisterForm = {
            headquarter_id: data.resume.headquarter.id,
            is_draft: data.resume.registrationType === 'draft',
            provider_code: data.resume.provider.code,
            comments: data.resume.comments ?? 'N/A',
            products: data.items.map(e => {
                return {
                    product_code: e.productCode,
                    igv: e.productIgv,
                    quantity: e.productQuantity,
                    unit_price: e.productUnitPrice
                }
            })
        };

        return form;
    }
}