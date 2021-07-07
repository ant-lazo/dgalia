import { Injectable } from '@angular/core';
import { EditRecipeForm } from '../models/edit-recipe-form.model';
import { RecipeSelectedSupply } from '../models/recipe-selected-supply';
import { RegisterRecipeForm } from '../models/register-recipe-form.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeRegisterFomService {

  constructor() { }

  public set supplies(sipplies: RecipeSelectedSupply[]) {
    sessionStorage.setItem('recipe-register-form_supplies', JSON.stringify(sipplies));
  }

  public get supplies(): RecipeSelectedSupply[] {
    return JSON.parse(sessionStorage.getItem('recipe-register-form_supplies'));
  }

  public set registerForm(form: RegisterRecipeForm) {
    sessionStorage.setItem('recipe-register-form_form', JSON.stringify(form))
  }

  public get registerForm(): RegisterRecipeForm {
    return JSON.parse(sessionStorage.getItem('recipe-register-form_form'));
  }

  public set updateForm(form: EditRecipeForm) {
    sessionStorage.setItem('recipe-update-form_form', JSON.stringify(form))
  }

  public get updateForm(): EditRecipeForm {
    return JSON.parse(sessionStorage.getItem('recipe-update-form_form'));
  }
}
