import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { ClassesService } from 'app/modules/classes/services/classes.service';
import { CoursesService } from 'app/modules/course/services/courses.service';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { TermsService } from 'app/modules/term/services/terms.service';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { combineLatest, Observable } from 'rxjs';
import { RegisterFormHelper } from './helpers/register-form-validations.helper';
import { RegisterFormMapper } from './mappers/register-form.mapper';
import { RegisterPrgFormModel, RegisterPrgRecipeSelectedModel } from './models/register-form.model';
import { RegisterCookingScheduleService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  public form: RegisterPrgFormModel;
  public request: Observable<any[]>;

  public selectRecipe: any;
  public selectedRecipeList: RegisterPrgRecipeSelectedModel[] = [];

  constructor(
    private _location: Location,
    private _headquarters: HeadquartesService,
    private _courses: CoursesService,
    private _classes: ClassesService,
    private _terms: TermsService,
    private _notifications: AppNotificationsService,
    private _mapper: RegisterFormMapper,
    private _helper: RegisterFormHelper,
    private _register: RegisterCookingScheduleService
  ) { }

  ngOnInit(): void {
    this.setRequestData();
  }

  private setRequestData(): void {
    this.request = combineLatest([
      this._classes.getList(),
      this._headquarters.getCompleteList(),
      this._courses.getCourseList(),
      this._terms.getCompleteList(),
    ])
  }

  public listenFormChanges(form: RegisterPrgFormModel): void {
    this.form = form;
  }

  public registerValidation(): void {
    const error: string = this._helper.validateFormData(this.selectedRecipeList, this.form);
    if (error != '') {
      this._notifications.error(null, error);
      return;
    }

    const data = this._mapper.toRegister(this.form, this.selectedRecipeList);
    this._register.run(data).subscribe((resp: JsonResp) => {
      this._notifications.registerSuccess(null);
      this._location.back();
    });
    
  }

  public onRecipeSelect(): void {
    this.selectRecipe = {};
  }

  public cancel(): void {
    this._location.back();
  }

  public listenRecipeListSelected(list: RegisterPrgRecipeSelectedModel[]): void {
    this.selectedRecipeList = list;
  }

}
