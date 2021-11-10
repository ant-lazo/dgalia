import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selection-buttons',
  templateUrl: './selection-buttons.component.html',
  styleUrls: ['./selection-buttons.component.scss']
})
export class SelectionButtonsComponent implements OnInit {

  @Output() onCancel: EventEmitter<void> = new EventEmitter();
  @Output() onRegister: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
