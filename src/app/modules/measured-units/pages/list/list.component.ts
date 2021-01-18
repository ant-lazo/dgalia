import { Component, OnInit } from '@angular/core';
import { MeasuredunitListComponentModel } from '../../view-models/list_component.model';
import * as config from 'assets/language/es/measured-unit.json';
import { RowAppButtonModel } from '../../../../shared/row-buttons/models/row-nutton.model';
import { MeasuredUnitListTableModel } from '../../view-models/list-table.model';
import { MeasuredUnit } from '../../models/measured-unit.model';
import { MeasuredUnitService } from '../../services/measured-unit.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public model: MeasuredunitListComponentModel;
  public tableModel: MeasuredUnitListTableModel;
  public measuredUnitList: MeasuredUnit[];

  registerButton: RowAppButtonModel[] = [];

  constructor(
    private _measuredUnit: MeasuredUnitService
  ) {
    this.setPageModels();
  }

  ngOnInit(): void {
    this.getList();
  }

  public register() {
    console.log('implements');
  }

  private setPageModels() {
    this.model = MeasuredunitListComponentModel.fromJson(config.list_component);
    this.registerButton.push(this.model.registerButton);
    this.tableModel = MeasuredUnitListTableModel.fromJson(config.list_table);
  }

  private getList(): void {
    this._measuredUnit.getGetList().subscribe(list => {
      this.measuredUnitList = list;
    })
  }
}
