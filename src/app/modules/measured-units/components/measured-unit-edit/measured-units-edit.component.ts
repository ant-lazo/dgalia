import { Component, OnInit , Inject} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MeasuredUnit } from "app/modules/measured-units/models/measured-unit.model";
import { MeasuredUnitService } from "app/modules/measured-units/services/measured-unit.service";

@Component({
  selector: 'app-measured-units-edit',
  templateUrl: './measured-units-edit.component.html',
  styleUrls: ['./measured-units-edit.component.scss']
})
export class MeasuredUnitEditComponent implements OnInit {

  public editForm: FormGroup;
  private id:Number;

  constructor(
    private matDialogRef: MatDialogRef<MeasuredUnitEditComponent>,
    private formBuilder: FormBuilder,
    public _measuredUnit: MeasuredUnitService,
    @Inject(MAT_DIALOG_DATA) public data: MeasuredUnit
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
      this.editMeasuredUnit(this.editForm.value);
      return;
    }
  }

  private editMeasuredUnit(data: any): void {
    data.id = this.id;
    console.log("🚀 ~ file: measured-units-edit.component.ts ~ line 42 ~ MeasuredUnitEditComponent ~ editMeasuredUnit ~ data", data)
    this._measuredUnit.editMeasuredUnit(data).subscribe(() => {
      this.matDialogRef.close(true);
    });
  }

  private setForm(data:MeasuredUnit) {
    this.editForm = this.formBuilder.group({
      code: [data.code, Validators.required],
      name: [data.name, Validators.required],
    });
    this.id = data.id
  }

}
