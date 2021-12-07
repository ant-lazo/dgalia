import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { Observable } from 'rxjs';
import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { RecipeFormModel } from '../../models/register-form';

@Component({
  selector: 'programation-register-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup;
  public request: Observable<any>;
  headquarterList: Headquarter[];

  @Output() formCompleted: EventEmitter<RecipeFormModel> = new EventEmitter();

  constructor(
    private _formBuilder: FormBuilder,
    private _headquarters: HeadquartesService
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
      headquarterId: [null, Validators.required]
    })
  }

  private listenFormChanges(): void {
    this.form.valueChanges.subscribe((form: RecipeFormModel ) => {
      this.form.valid ? this.formCompleted.emit(form) : this.formCompleted.emit(null);
    });
  }

}
