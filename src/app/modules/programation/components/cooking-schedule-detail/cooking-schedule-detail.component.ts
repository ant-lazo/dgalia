import { Component, Input } from '@angular/core';

import { CookingSchedule } from '../../models/cooking-schedule.model';

@Component({
  selector: 'app-cooking-schedule-detail',
  templateUrl: './cooking-schedule-detail.component.html',
  styleUrls: ['./cooking-schedule-detail.component.scss']
})
export class CookingScheduleDetailComponent   {

  @Input() cookingSchedule: CookingSchedule;

}
