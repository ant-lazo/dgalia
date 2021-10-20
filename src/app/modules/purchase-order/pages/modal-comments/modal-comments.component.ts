import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-comments',
  templateUrl: './modal-comments.component.html',
  styleUrls: ['./modal-comments.component.scss']
})
export class ModalCommentsComponent implements OnInit {

  constructor(private _builder: FormBuilder,public dialogRef: MatDialogRef<ModalCommentsComponent>) { }

  ngOnInit(): void {
  }


  closeModal() {
    this.dialogRef.close();
  }


}
