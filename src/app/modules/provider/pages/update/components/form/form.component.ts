import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentType } from 'app/modules/document-types/models/document-type';
import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { ProductCategory } from 'app/modules/product-category/models/product-category.interface';
import { RqRegisterProvider } from '../../../register/models/rq-register-provider';


@Component({
  selector: 'provider-update-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() documentTypeList: DocumentType[];
  @Input() headquarterList: Headquarter[];
  @Input() productCategoryList: ProductCategory[];
  @Output() completedForm: EventEmitter<RqRegisterProvider> = new EventEmitter();
  @Output() registerButtonPressed: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  public form: FormGroup;

  constructor(
    private _builder: FormBuilder
  ) {
    this.setForm();
  }

  ngOnInit(): void {
    this.listenFormChanges();
  }

  private listenFormChanges(): void {
    this.form.valueChanges.subscribe((form: RqRegisterProvider) => {
      if (this.form.valid) {
        this.completedForm.emit(form)
      } else {
        this.completedForm.emit(null);
      }
    });
  }

  private setForm(): void {
    this.form = this._builder.group({
      legal_name: [null, Validators.required],
      commercial_name: [null, Validators.required],
      document: [null, Validators.required],
      location: [null, Validators.required],
      document_type_code: [null, Validators.required],
      phone: [null, Validators.required],
      heading: [null, Validators.required],
      contact_names: [null, Validators.required],
      commnets: [null, Validators.required],
      category_code: [null],
      headquarter_id: [null]
    });
  }

}
