import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { TermsService } from "../../services/terms.service";

@Component({
  selector: 'app-term-register',
  templateUrl: './term-register.component.html',
  styleUrls: ['./term-register.component.scss']
})
export class TermRegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<TermRegisterComponent>,
    private _appNotifications: AppNotificationsService,
    private formBuilder: FormBuilder,
    private _term: TermsService
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
      this.registerTerm(this.registerForm.value);
      return;
    }
  }

  private registerTerm(data: any): void {
    this._term.registerNewTerm(data).subscribe(() => {
      this._appNotifications.registerSuccess();
      this.matDialogRef.close(true);
    });

  }

  private setForm() {
    this.registerForm = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required]
    });
  }

}
