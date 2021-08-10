import { RowAppButtonModel, RowButtonType } from "app/shared/row-buttons/models/row-nutton.model";

export class SubRecipeFormHelper {

    public get buttonsRowToUpdate(): RowAppButtonModel[] {
        return [
            new RowAppButtonModel({
                action: 'addsupply',
                color: 'primary',
                icon: 'add_circle_outline',
                label: 'Añadir insumo',
                type: RowButtonType.Stroked
            }),
            new RowAppButtonModel({
                action: 'updateSubRecipe',
                color: 'primary',
                icon: 'border_color',
                label: 'Actualizar sub receta',
                type: RowButtonType.Flat,
            }),
        ];
    }

    public get buttonsRowToRegister(): RowAppButtonModel[] {
        return [
            new RowAppButtonModel({
                action: 'addsupply',
                color: 'primary',
                icon: 'add_circle_outline',
                label: 'Añadir insumo',
                type: RowButtonType.Stroked
            }),
            new RowAppButtonModel({
                action: 'createSubRecipe',
                color: 'primary',
                icon: 'border_color',
                label: 'Registrar sub receta',
                type: RowButtonType.Flat,
            }),
        ];
    }
}