import { RowAppButtonModel, RowButtonType } from "app/shared/row-buttons/models/row-nutton.model";

export class RecipeFormHelper {

    public get buttonsRowToUpdate(): RowAppButtonModel[]{
        return [
            new RowAppButtonModel({
              action: 'addsupply',
              color: 'primary',
              icon: 'add_circle_outline',
              label: 'Añadir insumo',
              type: RowButtonType.Stroked
            }),
            new RowAppButtonModel({
              action: 'updateRecipe',
              color: 'primary',
              icon: 'border_color',
              label: 'Actualizar receta',
              type: RowButtonType.Flat,
            }),
          ];
    }
}