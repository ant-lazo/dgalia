import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { RegisterWarehouseFormModel } from 'app/modules/warehouse/models/form-models/register-form.model';
import { WarehouseService } from 'app/modules/warehouse/services/warehouse.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'warehouse-register-form',
  templateUrl: './register-form.component.html',
  styles: [
  ]
})
export class RegisterFormComponent implements OnInit {

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
    this.headquarterListRequest = this._headquarter.getCompleteList();
  }

  public saveWarehouse(): void {
    const model: RegisterWarehouseFormModel = this.formGroup.value;
    const request: Observable<JsonResp> = this._warehouse.register(model);

    request.subscribe((response: JsonResp) => {
      this._toast.success(`Se ha registrado la sede ${model.name}`, response.message);
      this.onReturn();
    });
  }

  public onReturn(): void {
    this._location.back();
  }

  private setForm(): void {
    this.formGroup = this._formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      location: [null, Validators.required],
      headquarter_id: [null],
      responsable: [null, Validators.required],
    });
  }


}
