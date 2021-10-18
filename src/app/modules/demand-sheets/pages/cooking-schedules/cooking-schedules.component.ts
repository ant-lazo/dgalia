import { Component, OnInit } from '@angular/core';
import { CookingScheduleService } from 'app/modules/programation/services/cooking-schedule.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'logistic-cooking-schedules',
  templateUrl: './cooking-schedules.component.html',
  styleUrls: ['./cooking-schedules.component.scss']
})
export class CookingSchedulesComponent implements OnInit {

  public request: Observable<any[]>;

  constructor(
    private _cookingSchedule: CookingScheduleService
  ) { }

  ngOnInit(): void {
    //{{dgalliaUrl}}api/v1/cooking-schedule
    this.request = this._cookingSchedule.getAll(); 
    console.log("{{dgalliaUrl}}api/v1/cooking-schedule: ",this.request)
  }
}
