import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RankingFormModel } from '../../../../pages/ranking-product/models/register-form';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { Observable } from 'rxjs';
import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';


@Component({
  selector: 'programation-register-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup;
  public request: Observable<any>;
  headquarterList: Headquarter[];

  @Output() formCompleted: EventEmitter<RankingFormModel> = new EventEmitter();

  constructor(
    private _formBuilder: FormBuilder,
    private _headquarters: HeadquartesService,
  ) {
    this.setForm();
   }

  ngOnInit(): void {
    this.listenFormChanges();
    this._headquarters.getCompleteList().subscribe(a=>{
      this.headquarterList=a;
    });
    
  }

  private setForm(): void {
    this.form = this._formBuilder.group({
      headquarterId: [null, Validators.required],
      start_date: [null, Validators.required],
      end_date: [null, Validators.required],
    })
  }

  private listenFormChanges(): void {
    this.form.valueChanges.subscribe((form: RankingFormModel ) => {
      this.form.valid ? this.formCompleted.emit(form) : this.formCompleted.emit(null);
    });
  }

}
