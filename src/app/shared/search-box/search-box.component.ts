import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  template: `
    <mat-form-field class="w-full">
        <input [(ngModel)]="searchParam" (ngModelChange)="this.searchParamDebounce.next($event)" matInput autocomplete="off"
            [placeholder]="placeHolder || 'Ingrese parametro de búsqueda'">
        <mat-icon svgIcon="search"></mat-icon>
    </mat-form-field>
  `,
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit {

  @Input() placeHolder: string;
  @Output() param: EventEmitter<string> = new EventEmitter();


  public searchParamDebounce = new Subject<string>();
  public searchParam: string;

  constructor() {
    this.searchParamDebounce.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.param.emit(value);
      });
  }

  ngOnInit(): void {
  }


}
