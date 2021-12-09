import { Injectable } from "@angular/core";
import { InvoiceFormModel } from "../models/register-form"

@Injectable()
export class ShowFormHelper {
    public  validateFormData(form: InvoiceFormModel): string {

        if (!form) {
            return 'Datos de formulario incompletos 🥵';
        }

        return '';
    }
}