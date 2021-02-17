import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookingScheduleService } from '../../services/cooking-schedule.service';
import { CookingSchedule } from '../../models/cooking-schedule.model';

@Component({
  selector: 'app-programation-detail',
  templateUrl: './programation-detail.component.html',
  styleUrls: ['./programation-detail.component.scss']
})
export class ProgramationDetailComponent implements OnInit {

  public cookingSchedule: CookingSchedule;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cookingSchedule: CookingScheduleService
  ) { }

  ngOnInit(): void {
    this.setCookingScheduleDetail();
  }

  private setCookingScheduleDetail(): void {
    this._cookingSchedule.getById(this.cookingScheduleId).subscribe(cookingSchedule => {
      this.cookingSchedule = cookingSchedule;
    });
  }

  public get cookingScheduleId(): string {
    return this._activatedRoute.snapshot.params.id;
  }

}
