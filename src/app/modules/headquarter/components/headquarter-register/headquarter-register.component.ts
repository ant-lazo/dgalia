import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { HeadquartesService } from "../../services/headquartes.service";

@Component({
  selector: 'app-headquarter-register',
  templateUrl: './headquarter-register.component.html',
  styleUrls: ['./headquarter-register.component.scss']
})
export class HeadquarterRegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<HeadquarterRegisterComponent>,
    private _appNotifications: AppNotificationsService,
    private formBuilder: FormBuilder,
    private _headquarter: HeadquartesService
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
      this.registerHeadquarter(this.registerForm.value);
      return;
    }
  }

  private registerHeadquarter(data: any): void {
    this._headquarter.registerNewHeadquarter(data).subscribe(() => {
      this._appNotifications.registerSuccess();
      this.matDialogRef.close(true);
    });

  }

  private setForm() {
    this.registerForm = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      address: [null, Validators.required],
      person: [null, Validators.required],
    });
  }

}
