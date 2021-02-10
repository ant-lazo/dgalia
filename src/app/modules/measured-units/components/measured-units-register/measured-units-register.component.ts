import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { MeasuredUnitService } from "../../services/measured-unit.service";

@Component({
  selector: 'app-supply-register',
  templateUrl: './measured-units-register.component.html',
  styleUrls: ['./measured-units-register.component.scss']
})
export class MeasuredUnitRegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<MeasuredUnitRegisterComponent>,
    private _appNotifications: AppNotificationsService,
    private formBuilder: FormBuilder,
    public _measuredUnit: MeasuredUnitService
  ) {
    this.setForm();
  }

  ngOnInit(): void {
  }

  public onNoCreate() {
    this.matDialogRef.close();
  }

  public formValidation(): void {
    if (this.registerForm.valid) {
      this.registerMeasuredUnit(this.registerForm.value);
      return;
    }
  }

  private registerMeasuredUnit(data: any): void {
    this._measuredUnit.registerNewMeasuredUnit(data).subscribe(() => {
      this._appNotifications.registerSuccess();
      this.matDialogRef.close(true);
    });

  }

  private setForm() {
    this.registerForm = this.formBuilder.group({
      code: [null, Validators.required],
      name: [null, Validators.required],
      category_id: [null, Validators.required],
      measured_unit_id: [null, Validators.required]
    });
  }

}
