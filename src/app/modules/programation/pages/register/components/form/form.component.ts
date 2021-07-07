import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { Term } from 'app/modules/term/models/term.interface';
import { TermsService } from 'app/modules/term/services/terms.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegisterPrgFormModel } from '../../models/register-form.model';

@Component({
  selector: 'programation-register-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() termList: Term[];
  @Input() headquarterList: Headquarter[];

  @Output() formCompleted: EventEmitter<RegisterPrgFormModel> = new EventEmitter();

  public form: FormGroup;
  public request: Observable<any>;

  constructor(
    private _formBuilder: FormBuilder,
    private _headquarters: HeadquartesService,
    private _terms: TermsService
  ) {
    this.setForm();
  }

  ngOnInit(): void {
    this.setRequestData();
    this.listenFormChanges();
  }

  private setRequestData(): void {
    this.request = combineLatest([
      this._headquarters.getCompleteList(),
      this._terms.getCompleteList()
    ]).pipe(map((result: any[]) => result));
  }

  private listenFormChanges(): void {
    this.form.valueChanges.subscribe((form: RegisterPrgFormModel) => {
      this.form.valid ? this.formCompleted.emit(form) : this.formCompleted.emit(null);
    });
  }

  private setForm(): void {
    this.form = this._formBuilder.group({
      note: [null, Validators.required],
      description: [null, Validators.required],
      start_date: [null, Validators.required],
      end_date: [null, Validators.required],
      term_id: [null, Validators.required],
      headquarter_id: [null, Validators.required],
      recipes: [null]
    })
  }

}
