import { Component, Input, OnInit } from '@angular/core';
import { CookingSchedule } from '../../models/cooking-schedule.model';

@Component({
  selector: 'app-cooking-schedule-detail',
  templateUrl: './cooking-schedule-detail.component.html',
  styleUrls: ['./cooking-schedule-detail.component.scss']
})
export class CookingScheduleDetailComponent implements OnInit {

  @Input() cookingSchedule: CookingSchedule;

  constructor() { }

  ngOnInit(): void { 
    console.log(this.cookingSchedule.recipes);
    
  }

}
