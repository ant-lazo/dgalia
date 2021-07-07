import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {DateAdapter} from '@angular/material/core';
import {
  MatDateRangeSelectionStrategy,
  DateRange
} from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-select-date',
  templateUrl: './select-date.component.html',
  styleUrls: ['./select-date.component.scss']
})
export class SelectDateComponent<D> implements OnInit, MatDateRangeSelectionStrategy<D> {
  
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  
  constructor(
    private _dateAdapter: DateAdapter<D>,
    private matDialogRef: MatDialogRef<SelectDateComponent<D>>,
  ) { }

  ngOnInit(): void {
  }

  selectionFinished(date: D | null): DateRange<D> {
    return this._createFiveDayRange(date);
  }

  createPreview(activeDate: D | null): DateRange<D> {
    return this._createFiveDayRange(activeDate);
  }

  private _createFiveDayRange(date: D | null): DateRange<D> {
    if (date) {
      const start = this._dateAdapter.addCalendarDays(date, -2);
      const end = this._dateAdapter.addCalendarDays(date, 2);
      return new DateRange<D>(start, end);
    }

    return new DateRange<D>(null, null);
  }

  public onNoSearch(retu:boolean) {
    retu ? this.matDialogRef.close(this.range.value):this.matDialogRef.close();
  }
}
