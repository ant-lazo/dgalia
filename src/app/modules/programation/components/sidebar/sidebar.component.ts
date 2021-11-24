import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
  Input,
} from "@angular/core";
import { Calendar } from "../../models/calendar.types";

@Component({
  selector: "calendar-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarSidebarComponent implements OnInit {
  calendar: Calendar | null;
  calendarColors: any;
  @Input() calendars: Calendar[];

  @Output()
  calendarUpdated: EventEmitter<Calendar[]> = new EventEmitter();

  //   headquarter: Headquarter | null;
  //   headquarterLocal: any;
  //   @Input() headquarters: Headquarter[];

  //   @Output()
  //   headquarterUpdated: EventEmitter<Headquarter[]> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleCalendarVisibility(calendar: Calendar): void {
    calendar.visible = !calendar.visible;
    this.calendarUpdated.emit(this.calendars);
  }
}
