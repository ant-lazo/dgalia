import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { Headquarter } from "../../models/headquarter.model";
import { HeadquartesService } from "../../services/headquartes.service";

@Component({
  selector: 'app-headquarter-edit',
  templateUrl: './headquarter-edit.component.html',
  styleUrls: ['./headquarter-edit.component.scss']
})
export class HeadquarterEditComponent implements OnInit {

  public editForm: FormGroup;
  private id: Number;

  constructor(
    private matDialogRef: MatDialogRef<HeadquarterEditComponent>,
    private _appNotifications: AppNotificationsService,
    private formBuilder: FormBuilder,
    private _headquarter: HeadquartesService,
    @Inject(MAT_DIALOG_DATA) public data: Headquarter
  ) {
    this.setForm(this.data);
  }

  ngOnInit(): void {
  }

  public onNoCreate() {
    this.matDialogRef.close();
  }

  public formValidation(): void {
    if (this.editForm.valid) {
      this.editHeadquarter(this.editForm.value);
      return;
    }
  }

  private editHeadquarter(data: any): void {
    data.id = this.id;
    this._headquarter.editHeadquarter(data).subscribe(() => {
      this._appNotifications.editSuccess();
      this.matDialogRef.close(true);
    });
  }

  private setForm(data: Headquarter) {
    this.editForm = this.formBuilder.group({
      description: [data.description, Validators.required],
      name: [data.name, Validators.required],
      address: [data.address, Validators.required],
      person_in_charge: [data.personInCharge, Validators.required],
    });
    this.id = data.id;
  }

}
