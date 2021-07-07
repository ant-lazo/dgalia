import { RowAppButtonModel, RowButtonType } from "app/shared/row-buttons/models/row-nutton.model";

export class ProductListPageHelper {


    public getActionButtons(): RowAppButtonModel[] {
        return [
            new RowAppButtonModel({
                action: 'filter',
                color: 'primary',
                icon: 'sort',
                label: 'Aplicar filtro',
                type: RowButtonType.Stroked
            })
        ]
    }
}