import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { DemandSheet } from 'app/modules/demand-sheets/models/demand-sheet.model';
import { DemandSheetService } from 'app/modules/demand-sheets/services/demand-sheet.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'purchase_order-register-ds_info',
  templateUrl: './demand-sheet-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemandSheetInfoComponent implements OnChanges {

  @Input() demandSheetCode: string;

  public rqDemandSheet: Observable<DemandSheet>;


  public tt: DemandSheet = {
    "id": 5,
    "code": "HDD00002",
    "cookingScheduleCode": "PG00007",
    "startDate": new Date('2021-05-01T10:00:00.000Z'),
    "endDate":  new Date('2021-05-01T10:00:00.000Z'),
    "headquarter": {
      "id": 1,
      "name": "Sede Los Olivos",
      "description": "Sede Los Olivos",
      "address": "Los Olivos 321",
      "personInCharge": "David Perez",
      "enabled": true,
      "color": ""
    },
    "isExpired": true,
    "enabled": true,
    "createdAt":  new Date('2021-05-01T10:00:00.000Z'),
    "updatedAt":  new Date('2021-05-01T10:00:00.000Z'),
    "createdBy": {
      "id": 1,
      "fullname": "ADMINISTRADOR",
      "email": "admin@dgalia.com"
    },
    "updatedBy": {
      "id": 1,
      "fullname": "ADMINISTRADOR",
      "email": "admin@dgalia.com"
    },
    "items": []
  }



  constructor(
    private _demandSheets: DemandSheetService
  ) { }

  ngOnChanges(): void {

    if (this.demandSheetCode) this.setDemanDemandSheet();
  }

  private setDemanDemandSheet(): void {
    console.log('hi');

    this.rqDemandSheet = this._demandSheets.findByCode(this.demandSheetCode);
  }



}
  