import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DemandSheet } from '../../models/demand-sheet.model';
import { DemandSheetService } from '../../services/demand-sheet.service';

@Component({
  selector: 'demand-sheets-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public request: Observable<DemandSheet>

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _demandSheet: DemandSheetService,
  
  ) { }

  ngOnInit(): void {
    this.request = this._demandSheet.findByCode(this.code);
  }

  private get code(): string {
    return this._activatedRoute.snapshot.params.code;
  }

}
