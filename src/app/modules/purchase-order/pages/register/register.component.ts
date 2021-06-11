import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { DemandSheetsComponent } from 'app/modules/demand-sheets/demand-sheets.component';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { Observable } from 'rxjs';

import { PurchaseOrderComponent } from '../../purchase-order.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PurchaseOrderRegisterMapper } from './mappers/po-register.mapper';
import { PoResumeModalRespData } from './models/po-resume-modal-data.model';
import { PoRqRegisterForm } from './models/po-rq-register-form.model';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'purchase_order-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit, OnDestroy {

  public demandSheetCode: string;
  private mapper: PurchaseOrderRegisterMapper;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _register: RegisterService,
    private _matDialog: MatDialog,
    private _toast: AppNotificationsService,
  ) {
    this.mapper = new PurchaseOrderRegisterMapper();
  }


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

  public listenRegisterActionToOpenDialog(): void {
    const dialogRed = this._matDialog.open(ResumeComponent, {
      width: '70%',
      height: '500px'
    });

    dialogRed.afterClosed().subscribe((resume: PoResumeModalRespData) => {
      if (resume) {
        const data: PoRqRegisterForm = this.mapper.buildFoormData({ resume, items: this._register.currentProducts.value });
        this.registerPurchaseOrder(data);
      }
    });
  }

  private registerPurchaseOrder(form: PoRqRegisterForm): void {
    const request: Observable<JsonResp> = this._register.run(form);

    request.subscribe((_resp: JsonResp) => {
      this._toast.registerSuccess(null, `Orden de compra guardada exitosamente`);
      this._router.navigate([PurchaseOrderComponent.listRoute]);
    });
  }


}
