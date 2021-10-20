import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['./modal-order.component.scss']
})
export class ModalOrderComponent implements OnInit {
  
  
  constructor(private _builder: FormBuilder,public dialogRef: MatDialogRef<ModalOrderComponent>) { }

  ngOnInit(): void {
  }
  
  closeModal() {
    this.dialogRef.close();
  }
}
