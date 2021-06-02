import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CookingSchedule } from '../../models/cooking-schedule.model';
import { CookingScheduleService } from '../../services/cooking-schedule.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public request: Observable<CookingSchedule>;

  constructor(
    private _cookingSchedules: CookingScheduleService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.request = this._cookingSchedules.getByCode(this.code);    
  }

  private get code(): string {
    return this._activatedRoute.snapshot.params.code;
  }


}
