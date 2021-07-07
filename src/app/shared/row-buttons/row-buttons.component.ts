import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { RowAppButtonModel } from './models/row-nutton.model';

@Component({
  selector: 'app-row-buttons',
  templateUrl: './row-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
  ]
})
export class RowButtonsComponent {
  @Input() buttons: RowAppButtonModel[];
  @Input() justify: string;
  @Output() onClick: EventEmitter<string> = new EventEmitter();
}
