import { Component, Input, OnInit } from '@angular/core';
import { DemandSheet } from 'app/modules/demand-sheets/models/demand-sheet.model';

@Component({
  selector: 'demand-sheets-detail-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

   @Input() demandSheet: DemandSheet

  constructor() { }

  ngOnInit(): void {
  }

}
