import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'programation-register-selection-buttons',
  templateUrl: './selection-buttons.component.html',
  styles: [
  ]
})
export class SelectionButtonsComponent implements OnInit {

  @Output() onRegister: EventEmitter<void> = new EventEmitter();
  @Output() onCancel: EventEmitter<void> = new EventEmitter();
  @Output() onRecipeSelect: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
