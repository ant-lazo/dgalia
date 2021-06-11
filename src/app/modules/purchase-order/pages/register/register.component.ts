import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { DemandSheetsComponent } from 'app/modules/demand-sheets/demand-sheets.component';
import { DemandSheet, DemandSheetItem } from 'app/modules/demand-sheets/models/demand-sheet.model';
import { DemandSheetService } from 'app/modules/demand-sheets/services/demand-sheet.service';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { Observable } from 'rxjs';

import { PurchaseOrderComponent } from '../../purchase-order.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PurchaseOrderRegisterMapper } from './mappers/po-register.mapper';
import { PoResumeModalRespData } from './models/po-resume-modal-data.model';
import { PoRqRegisterForm } from './models/po-rq-register-form.model';
import { RqPoSelectedItem } from './models/po-selected-item.model';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'purchase_order-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit, OnDestroy {

  public demandSheet: DemandSheet;
  private mapper: PurchaseOrderRegisterMapper;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _demandSheets: DemandSheetService,
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
    this.validateDemandSheetCode();
  }

  private validateDemandSheetCode(): void {
    //const code: string = this._activatedRoute.snapshot.params.demandSheetCode;
    const code: string = 'HDD00002';
    if (code) this.setDemandSheet(code);
  }

  private setDemandSheet(code: string): void {
    const request: Observable<DemandSheet> = this._demandSheets.findByCode(code);
    request.subscribe((resp: DemandSheet) => {
      this.demandSheet = resp;
      this.setDemandSheetProducts(resp.items);
    });
  }


  private setDemandSheetProducts(items: DemandSheetItem[]): void {
    const products: RqPoSelectedItem[] = items.map(e => {
      return new RqPoSelectedItem({
        productCategoryName: null,
        productCode: null,
        productIgv: null,
        productMuName: null,
        productName: null,
        productQuantity: null,
        productUnitPrice: null,
        requiredMeasuredUnitName: e.measuredunitRequired.name,
        requiredQuantity: e.quantityRequired,
        supplyId: e.supplyId,
        supplyName: e.supplyName,
      });
    });

    this._register.currentProducts.next(products);
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
