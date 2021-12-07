import { Injectable } from "@angular/core";
import { RankingFormModel } from "../models/register-form"

@Injectable()
export class ShowFormHelper {
    public  validateFormData(form: RankingFormModel): string {

        if (!form) {
            return 'Datos de formulario incompletos 🥵';
        }

        return '';
    }
}