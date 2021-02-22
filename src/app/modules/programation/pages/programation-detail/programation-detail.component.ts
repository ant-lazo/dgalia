import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookingScheduleService } from '../../services/cooking-schedule.service';
import { CookingSchedule } from '../../models/cooking-schedule.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-programation-detail',
  templateUrl: './programation-detail.component.html',
  styleUrls: ['./programation-detail.component.scss']
})
export class ProgramationDetailComponent implements OnInit {

  public cookingSchedule: Observable<CookingSchedule>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cookingSchedule: CookingScheduleService
  ) { }

  ngOnInit(): void {
    this.cookingSchedule = this._cookingSchedule.getById(this.cookingScheduleId);
  }



  public get cookingScheduleId(): string {
    return this._activatedRoute.snapshot.params.id;
  }

}
