import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DemandSheet } from '../../models/demand-sheet.model';
import { DemandSheetService } from '../../services/demand-sheet.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public request: Observable<DemandSheet[]>

  constructor(
    private _demandSheets: DemandSheetService,
  ) { }

  ngOnInit(): void {
    this.request = this._demandSheets.getAll();
  }
}
