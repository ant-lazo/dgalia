import { Injectable } from "@angular/core";
import { ValorationFormModel } from "../models/register-form"

@Injectable()
export class ShowFormHelper {
    public  validateFormData(form: ValorationFormModel): string {

        if (!form) {
            return 'Datos de formulario incompletos 🥵';
        }

        return '';
    }
}