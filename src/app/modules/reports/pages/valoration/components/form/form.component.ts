import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

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
