import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() showButton: boolean;
  @Input() buttonIcon: string;
  @Input() buttonText: boolean;
  @Input() returnBack: boolean;

  @Output() butttonAction: EventEmitter<boolean> = new EventEmitter();

  constructor(
    public location: Location
  ) { }

  ngOnInit(): void {
  }

  public listenButtonClick(): void {
    if (this.returnBack) {
      this.location.back();
    } else {
      this.butttonAction.emit(true);
    }
  }

}
