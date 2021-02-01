import { RowAppButtonModel, RowButtonType } from 'app/shared/row-buttons/models/row-nutton.model';


export class RegisterPageComponentHelper {


    public static getPageButtons(): RowAppButtonModel[] {
        return [
            new RowAppButtonModel({
                action: 'add-recipes',
                color: 'primary',
                icon: 'library_add',
                label: 'Añadir receta',
                type: RowButtonType.Stroked
            }),
            new RowAppButtonModel({
                action: 'cancel',
                color: 'primary',
                icon: 'close',
                label: 'Cancelar',
                type: RowButtonType.Stroked
            }),
            new RowAppButtonModel({
                action: 'register',
                color: 'primary',
                icon: 'save',
                label: 'Registrar',
                type: RowButtonType.Flat
            })
        ];
    }
}