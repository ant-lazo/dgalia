import { Component, OnInit , Inject} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { Observable } from 'rxjs';
import { Term } from "../../models/term.interface";
import { TermsService } from "../../services/terms.service";

@Component({
  selector: 'app-term-edit',
  templateUrl: './term-edit.component.html',
  styleUrls: ['./term-edit.component.scss']
})
export class TermEditComponent implements OnInit {

  public editForm: FormGroup;
  private id:Number;

  constructor(
    private matDialogRef: MatDialogRef<TermEditComponent>,
    private _appNotifications: AppNotificationsService,
    private formBuilder: FormBuilder,
    private _term: TermsService,
    @Inject(MAT_DIALOG_DATA) public data: Term
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
      this.editTerm(this.editForm.value);
      return;
    }
  }

  private editTerm(data: any): void {
    data.id = this.id;
    this._term.editTerm(data).subscribe(() => {
      this._appNotifications.editSuccess();
      this.matDialogRef.close(true);
    });
  }

  private setForm(data:Term) {
    this.editForm = this.formBuilder.group({
      description: [data.description, Validators.required],
      name: [data.name, Validators.required],
    });
    this.id = data.id;
  }

}
