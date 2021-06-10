import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandSheetsComponent } from 'app/modules/demand-sheets/demand-sheets.component';

import { ResumeComponent } from './components/resume/resume.component';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'purchase_order-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit, OnDestroy {

  public demandSheetCode: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _register: RegisterService,
    private _matDialog: MatDialog
  ) { }


  ngOnDestroy(): void {
    this._register.currentProducts.next([]);
  }

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

  public listenRegisterAction(): void {
    const dialogRef = this._matDialog.open(ResumeComponent, {
      width: '70%',
      height: '500px'
    });

  }

}
