import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'purchase_order-detail-add-comment-update-modal',
  templateUrl: './add-comment-update-modal.component.html',
  styleUrls: ['./add-comment-update-modal.component.scss']
})
export class AddCommentUpdateModalComponent implements OnInit {

  public comments: string;

  constructor(
    private _dialogRef: MatDialogRef<AddCommentUpdateModalComponent>
  ) { }

  ngOnInit(): void {
  }

  public onClose(commnets?: string): void {
    this._dialogRef.close(commnets ?? this.comments);
  }


}
