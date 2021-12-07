import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selection-buttons',
  templateUrl: './selection-buttons.component.html',
  styleUrls: ['./selection-buttons.component.scss']
})
export class SelectionButtonsComponent implements OnInit {

  @Output() onShow: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
