import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Term } from '../../../term/models/term.interface';
import { Headquarter } from '../../../headquarter/models/headquarter.model';
import { Course } from '../../../course/models/course.interface';
import { RegisterRecipeForm } from '../../models/register-recipe-form.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'recipe-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RecipeFormComponent implements OnChanges {

  @Input() termList: Term[];
  @Input() headquarterList: Headquarter[];
  @Input() courseList: Course[];
  @Input() trigger: boolean;
  @Output() completeForm: EventEmitter<RegisterRecipeForm> = new EventEmitter();

  public recipeForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _toast: ToastrService
  ) {
    this.setForm();
  }

  ngOnChanges(): void {
    if (this.trigger && this.recipeForm.invalid) {
      this._toast.error('El formulario no es válido, verifique los campos requeridos e intente nuevamente', 'Error en formulario');
    }
    if (this.trigger && this.recipeForm.valid) {
      this.completeForm.emit(this.recipeForm.value);
    }
  }

  private setForm() {
    this.recipeForm = this._formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      code: [null, Validators.required],
      price: [null, Validators.required],
      cost: [null, Validators.required],
      headquarter_id: [null, Validators.required],
      course_id: [null, Validators.required],
      term_id: [null, Validators.required],
    });
  }

}
