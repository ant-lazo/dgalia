import { Injectable } from "@angular/core";
import { RecipeFormModel } from "../models/register-form"

@Injectable()
export class ShowFormHelper {
    public  validateFormData(form: RecipeFormModel): string {

        if (!form) {
            return 'Datos de formulario incompletos 🥵';
        }

        return '';
    }
}