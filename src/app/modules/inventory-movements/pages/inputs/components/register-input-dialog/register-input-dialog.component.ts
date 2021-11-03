import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JsonResp } from 'app/core/interfaces/json-resp.interface';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { Product } from 'app/modules/product/models/product.model';
import { ProductService } from 'app/modules/product/services/product.service';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register-input-dialog',
  templateUrl: './register-input-dialog.component.html',
  styleUrls: ['./register-input-dialog.component.scss']
})
export class RegisterInputDialogComponent implements OnInit {

  constructor(
    private _dialogRef: MatDialogRef<RegisterInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { productCode: string }
  ) { }

  ngOnInit(): void {
  }

  public onClose(): void {
    this._dialogRef.close();
  }

}
