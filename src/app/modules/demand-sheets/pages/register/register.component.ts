import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeasuredUnitService } from 'app/modules/measured-units/services/measured-unit.service';
import { CookingSchedule } from 'app/modules/programation/models/cooking-schedule.model';
import { CookingScheduleService } from 'app/modules/programation/services/cooking-schedule.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public request: Observable<any>;
  public cookingSchedule: CookingSchedule;

  public cookingScheduleId: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cookingSchedule: CookingScheduleService,
    private _measureUnits: MeasuredUnitService
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
      this.cookingSchedule = result[2];
      console.log(result[0]);
      
      return result;
    }));
  }



}
