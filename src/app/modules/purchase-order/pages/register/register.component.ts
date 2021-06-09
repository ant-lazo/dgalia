import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandSheetsComponent } from 'app/modules/demand-sheets/demand-sheets.component';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'purchase_order-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  public demandSheetCode: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _register: RegisterService
  ) { }

  ngOnInit(): void {
    this.setDemandsheetCode();
  }

  private setDemandsheetCode(): void {
    const code: string = this._activatedRoute.snapshot.params.demandSheetCode;
    this.demandSheetCode = code !== 'none' ? code : null;
  }

  public navigateToDemandSheetList(): void {
    this._router.navigate([DemandSheetsComponent.listRoute]);
  }

}
