import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { RegisterWarehouseFormModel } from '../../models/form-models/register-form.model';
import { Warehouse } from '../../models/warehouse.model';
import { WarehouseService } from '../../services/warehouse.service';

@Component({
  selector: 'app-warehouse-register-form',
  templateUrl: './warehouse-register-form.component.html',
  styles: [
  ]
})
export class WarehouseRegisterFormComponent implements OnInit {

  @Input() warehouse: Warehouse;

  public formGroup: FormGroup;
  public headquarterListRequest: Observable<Headquarter[]>

  constructor(
    private _formBuilder: FormBuilder,
    private _headquarter: HeadquartesService,
    private _toast: ToastrService,
    private _warehouse: WarehouseService,
    private _location: Location
  ) {
    this.setForm();
  }

  ngOnInit(): void {
    if (this.warehouse) this.setForm();
    this.headquarterListRequest = this._headquarter.getCompleteList();
  }

  public validateAction(): void {
    this.warehouse == null ? this.saveWarehouse(): this.updateWarehouse();
  }

  private saveWarehouse(): void {
    const model: RegisterWarehouseFormModel = this.formGroup.value;
    const request: Observable<JsonResp> = this._warehouse.register(model);

    request.subscribe((response: JsonResp) => {
      this._toast.success(`Se ha registrado la sede ${model.name}`, response.message);
      this.onReturn();
    });
  }

  private updateWarehouse(): void {
    const model = this.formGroup.value;
    const request: Observable<JsonResp> = this._warehouse.update(model);

    request.subscribe((resp: JsonResp) => {
      this._toast.success(`Se ha actualizado la sede ${model.name}`, resp.message);
      this.onReturn();
    });

  }

  public onReturn(): void {
    this._location.back();
  }

  public getButtonLabel(): string {
    return this.warehouse == null ? 'Registrar' : 'Actualizar';
  }

  private setForm(): void {
    this.formGroup = this._formBuilder.group({
      code: [this.warehouse?.getCode()],
      name: [this.warehouse?.getName(), Validators.required],
      description: [this.warehouse?.getDescription(), Validators.required],
      location: [this.warehouse?.getLocation(), Validators.required],
      headquarter_id: [this.warehouse?.getHeadquarterId()],
      responsable_name: [this.warehouse?.getResponsable(), Validators.required],
    });
  }

}
