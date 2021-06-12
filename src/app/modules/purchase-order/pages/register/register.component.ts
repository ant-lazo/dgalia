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
  public demandSheetCode: string;
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
    this.demandSheetCode = this._activatedRoute.snapshot.params.demandSheetCode;
    this.setDemandSheet();
  }

  private setDemandSheet(): void {
    if (this.demandSheetCode) {
      const request: Observable<DemandSheet> = this._demandSheets.findByCode(this.demandSheetCode);
      request.subscribe((resp: DemandSheet) => {
        this.demandSheet = resp;
        this.setDemandSheetProducts(resp.items);
      });
    }
  }


  private setDemandSheetProducts(items: DemandSheetItem[]): void {
    const products: RqPoSelectedItem[] = items.map(e => {
      return this.mapper.getProductFromDemandSheetItem(e);
    });
    this._register.currentProducts.next(products);
  }

  public navigateToDemandSheetList(): void {
    this._router.navigate([DemandSheetsComponent.listRoute]);
  }

  public listenRegisterActionToOpenDialog(): void {

    const products = this.validateProducts();
    if (products.length == 0) return;

    const dialogRed = this._matDialog.open(ResumeComponent, {
      width: '70%',
      height: '500px'
    });

    dialogRed.afterClosed().subscribe((resume: PoResumeModalRespData) => {
      if (resume) this.validateData(resume);
    });
  }

  private validateData(resume: PoResumeModalRespData): void {
    const products: RqPoSelectedItem[] = this.validateProducts();

    const data: PoRqRegisterForm = this.mapper.buildFormData({
      resume,
      items: products,
      demandSheetCode: this.demandSheet ? this.demandSheet.code : null
    });

    this.registerPurchaseOrder(data);
  }

  private validateProducts(): RqPoSelectedItem[] {
    let products: RqPoSelectedItem[] = this._register.currentProducts.value;
    for (const product of products) {
      if (!product?.productCode) {
        this._toast.error(null, 'No podemos registrar la orden de compra si no asignas todos los productos correspondientes, verifica si te falta alguno por seleccionar.')
        products = [];
        break;
      }
    }
    return products;
  }

  private registerPurchaseOrder(form: PoRqRegisterForm): void {
    const request: Observable<JsonResp> = this._register.run(form);

    request.subscribe((_resp: JsonResp) => {
      this._toast.registerSuccess(null, `Orden de compra guardada exitosamente`);
      this._router.navigate([PurchaseOrderComponent.listRoute]);
    });
  }


}
