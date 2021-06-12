import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DemandSheet } from 'app/modules/demand-sheets/models/demand-sheet.model';

@Component({
  selector: 'purchase_order-register-ds_info',
  templateUrl: './demand-sheet-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemandSheetInfoComponent {

  @Input() demandSheet: DemandSheet;

  constructor() { }




}
