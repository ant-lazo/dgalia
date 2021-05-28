import { Injectable } from "@angular/core";
import { RegisterPrgFormModel, RegisterPrgRecipeSelectedModel } from "../models/register-form.model";


@Injectable()
export class RegisterFormHelper {

    public  validateRecipeList(list: RegisterPrgRecipeSelectedModel[]): string {
        let message: string = '';
        for (const recipe of list) {
            console.log(recipe);

            if (recipe.class_id == null) {
                message = `ups!, aun falta asignarle una clase a la receta ${recipe.name}`;
                break;
            }

            if (!recipe.quantity || recipe.quantity === 0) {
                message = `La receta ${recipe.name} debe tener una cantidad mayor a 0`;
                break;
            }

            if (!recipe.date) {
                message = `No le vas a agregar fecha a ${recipe.name}?, es que creoo que debe tener una :/`;
                break;
            }
        }
        return message;
    }


    public  validateFormData(recipeList: RegisterPrgRecipeSelectedModel[], form: RegisterPrgFormModel): string {
        if (!recipeList || recipeList.length == 0) {
            return 'Debes seleccionar unas cuantas recetas o una si quieres 😂';
        }

        const validatedErr: string = this.validateRecipeList(recipeList);
        if (validatedErr != '') {
            return validatedErr;
        }

        if (!form) {
            return 'Datos de formulario incompletos';
        }

        return '';
    }
}