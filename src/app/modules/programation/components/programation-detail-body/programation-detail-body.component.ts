import { Component, Input } from '@angular/core';
import { CookingSchedule } from '../../models/cooking-schedule.model';

@Component({
  selector: 'app-programation-detail-body',
  templateUrl: './programation-detail-body.component.html',
  styleUrls: ['./programation-detail-body.component.scss']
})
export class ProgramationDetailBodyComponent {

  @Input() cookingSchedule: CookingSchedule;

  constructor() { }


}
