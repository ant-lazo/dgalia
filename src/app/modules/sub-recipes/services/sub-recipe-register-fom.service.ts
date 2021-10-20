import { Injectable } from '@angular/core';
import { EditSubRecipeForm } from '../models/edit-sub-recipe-form.model';
import { SubRecipeSelectedSupply } from '../models/sub-recipe-selected-supply';
import { RegisterSubRecipeForm } from '../models/register-sub-recipe-form.model';

@Injectable({
  providedIn: 'root'
})
export class SubRecipeRegisterFomService {

  constructor() { }

  public set supplies(sipplies: SubRecipeSelectedSupply[]) {
    sessionStorage.setItem('sub-recipe-register-form_supplies', JSON.stringify(sipplies));
  }

  public get supplies(): SubRecipeSelectedSupply[] {
    return JSON.parse(sessionStorage.getItem('sub-recipe-register-form_supplies'));
  }

  public set registerForm(form: RegisterSubRecipeForm) {
    sessionStorage.setItem('sub-recipe-register-form_form', JSON.stringify(form))
  }

  public get registerForm(): RegisterSubRecipeForm {
    return JSON.parse(sessionStorage.getItem('sub-recipe-register-form_form'));
  }

  public set updateForm(form: EditSubRecipeForm) {
    sessionStorage.setItem('sub-recipe-update-form_form', JSON.stringify(form))
  }

  public get updateForm(): EditSubRecipeForm {
    return JSON.parse(sessionStorage.getItem('sub-recipe-update-form_form'));
  }
}
