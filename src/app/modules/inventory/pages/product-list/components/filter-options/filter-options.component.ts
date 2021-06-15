import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'inventory-products_list-filter_options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss'],
})
export class FilterOptionsComponent implements OnInit {

  public filterType: string = 'a';
  public rqheadquarter: Observable<Headquarter[]>;

  @Output() paramSelected: EventEmitter<string> = new EventEmitter();

  constructor(
    private _headquarters: HeadquartesService
  ) { }

  ngOnInit(): void {
    this.rqheadquarter = this._headquarters.getCompleteList();
  }

  public listenSearchBox(param: string): void {
    this.paramSelected.emit(`name:${param}`)
  }

  public headquarterChange(event: any) {
    this.paramSelected.emit(`headquarter:${event}`)
  }

}
