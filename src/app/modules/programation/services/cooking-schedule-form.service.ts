import { Injectable } from '@angular/core';
import { CookingScheduleUpdateForm } from '../models/update-form.model';

@Injectable({
  providedIn: 'root'
})
export class CookingScheduleFormService {

  constructor() { }

  public set updateForm(form: CookingScheduleUpdateForm) {
    sessionStorage.setItem('cooking-schedule_update-form', JSON.stringify(form));
  }

  public get updateForm(): CookingScheduleUpdateForm {
    return JSON.parse(sessionStorage.getItem('cooking-schedule_update-form'));
  }
}
