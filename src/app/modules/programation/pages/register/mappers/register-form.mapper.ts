import { Injectable } from "@angular/core";
import { RegisterPrgFormModel, RegisterPrgRecipeSelectedModel } from "../models/register-form.model";


@Injectable({ providedIn: 'any' })
export class RegisterFormMapper {

    public toRegister(form: RegisterPrgFormModel, list: RegisterPrgRecipeSelectedModel[]): RegisterPrgFormModel {
        return {
            description: form.description,
            end_date: form.end_date,
            headquarter_id: form.headquarter_id,
            note: form.note,
            recipes: list.map(e => {
                return {
                    class_id: e.class_id,
                    course_id: e?.course_id,
                    date: e.date,
                    id: e.id,
                    quantity: e.quantity
                }
            }),
            start_date: form.start_date,
            term_id: form.term_id
        }

    }
}