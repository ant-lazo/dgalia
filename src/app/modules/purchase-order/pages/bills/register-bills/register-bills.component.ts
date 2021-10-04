import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-bills',
  templateUrl: './register-bills.component.html',
  styleUrls: ['./register-bills.component.scss']
})
export class RegisterBillsComponent implements OnInit {

  constructor(private _builder: FormBuilder,public dialogRef: MatDialogRef<RegisterBillsComponent>) { }

  ngOnInit(): void {
  }
  closeModal() {
    this.dialogRef.close();
  }
}
