import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentType } from 'app/modules/document-types/models/document-type';
import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { ProductCategory } from 'app/modules/product-category/models/product-category.interface';
import { Provider } from 'app/modules/provider/models/provider';

import { RqRegisterProvider } from '../../../register/models/rq-register-provider';

@Component({
  selector: 'provider-update-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  @Input() provider: Provider;
  @Input() documentTypeList: DocumentType[];
  @Input() headquarterList: Headquarter[];
  @Input() productCategoryList: ProductCategory[];
  @Output() completedForm: EventEmitter<RqRegisterProvider> = new EventEmitter();
  @Output() onUpdatePressed: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  public form: FormGroup;

  constructor(
    private _builder: FormBuilder
  ) {  }

  ngOnInit(): void {
    this.setForm();
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
      legal_name: [this.provider.legalName, Validators.required],
      commercial_name: [this.provider.commercialName, Validators.required],
      document: [this.provider.document, Validators.required],
      location: [this.provider.location, Validators.required],
      document_type_code: [this.provider.documentType.code, Validators.required],
      phone: [this.provider.phone, Validators.required],
      heading: [this.provider.heading, Validators.required],
      contact_names: [this.provider.contactNames, Validators.required],
      commnets: [this.provider.comments, Validators.required],
      category_code: [this.provider?.productCategory?.code],
      headquarter_id: [this.provider?.headquarter?.id]
    });
  }

}
