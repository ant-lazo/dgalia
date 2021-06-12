import { DemandSheetItem } from 'app/modules/demand-sheets/models/demand-sheet.model';
import { PoResumeModalRespData } from '../models/po-resume-modal-data.model';
import { PoRqRegisterForm } from '../models/po-rq-register-form.model';
import { RqPoSelectedItem } from '../models/po-selected-item.model';

export class PurchaseOrderRegisterMapper {

    public buildFormData(data: {
        resume: PoResumeModalRespData
        items: RqPoSelectedItem[],
        demandSheetCode?: string,
    }): PoRqRegisterForm {
        const form: PoRqRegisterForm = {
            headquarter_id: data.resume.headquarter.id,
            is_draft: data.resume.registrationType === 'draft',
            provider_code: data.resume.provider.code,
            comments: data.resume.comments ?? 'N/A',
            demand_sheet_code: data.demandSheetCode ? data.demandSheetCode : null,
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


    public getProductFromDemandSheetItem(item: DemandSheetItem): RqPoSelectedItem {
        return new RqPoSelectedItem({
            productCategoryName: null,
            productCode: null,
            productIgv: null,
            productMuName: null,
            productName: null,
            productQuantity: null,
            productUnitPrice: null,
            requiredMeasuredUnitName: item.measuredunitRequired.name,
            requiredQuantity: item.quantityRequired,
            supplyCode: item.supplyCode,
            supplyName: item.supplyName,
        });

    }
}