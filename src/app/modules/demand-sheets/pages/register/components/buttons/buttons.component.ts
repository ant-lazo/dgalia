import { Location } from '@angular/common';
import { Component, EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'demand_sheets-register-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  @Output() registerPressed: EventEmitter<any> = new EventEmitter();

  constructor(
    public location: Location
  ) { }
}
