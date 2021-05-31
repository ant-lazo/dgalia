import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppPaths } from 'app/core/config/app-routes';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { MeasuredUnitService } from 'app/modules/measured-units/services/measured-unit.service';
import { CookingSchedule } from 'app/modules/programation/models/cooking-schedule.model';
import { CookingScheduleService } from 'app/modules/programation/services/cooking-schedule.service';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DemandSheetRegisterFormMapper } from './mappers/demand-sheet-form.mapper';
import { ResumeItemFormMapper } from './mappers/resume-item-form.mapper';
import { RqDemandSheetRegister } from './models/demand-sheet-form.model';
import { ResumeFormList } from './models/resume-list-request-model';
import { RegisterDemandSheetService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public request: Observable<any>;
  public cookingSchedule: CookingSchedule;

  public cookingScheduleId: string;
  public resumenList: ResumeFormList[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cookingSchedule: CookingScheduleService,
    private _measureUnits: MeasuredUnitService,
    private _notifcations: AppNotificationsService,
    private _register: RegisterDemandSheetService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.cookingScheduleId = this._activatedRoute.snapshot.params.cookingScheduleId;
    if (this.cookingScheduleId != 'none') this.setData();
  }

  public setData(): void {
    this.request = combineLatest([
      this._cookingSchedule.getResume(Number(this.cookingScheduleId)),
      this._measureUnits.getGetList(),
      this._cookingSchedule.getById(this.cookingScheduleId)
    ]).pipe(map((result: any) => {
      this.resumenList = new ResumeItemFormMapper().fromResumeList(result[0]);
      this.cookingSchedule = result[2];
      return result;
    }));
  }


  public validateDataToRegister(): void {
    const error: string = this.itemsValidations();
    if (error != '') {
      this._notifcations.error(null, error);
      return;
    }

    const newDemandSheet: RqDemandSheetRegister = DemandSheetRegisterFormMapper.toRegister({
      cookingScheduleId: this.cookingSchedule.id,
      headquarter_id: this.cookingSchedule.headquarter.id,
      resumenList: this.resumenList
    });

    this.register(newDemandSheet);
  }

  private register(newDemandSheet: RqDemandSheetRegister): void {
    this._register.execute(newDemandSheet).subscribe((resp: JsonResp) => {
      this._notifcations.registerSuccess();
      this._router.navigate([AppPaths.demandSheets.listado]);
    });
  }



  public itemsValidations(): string {
    let message: string = '';
    for (const item of this.resumenList) {
      if (!item.equivalentQuantity || item.equivalentQuantity == 0) {
        message = `Debe ingrsar una cantidad equivalente valida para el insumo ${item.code}`;
        break;
      }
      if (!item.enquivalentMeasuredUnitCode) {
        message = `Debe seleciconar una unidad de medida equivalente del insumo ${item.code}`;
        break;
      }
    }

    return message;
  }


}
