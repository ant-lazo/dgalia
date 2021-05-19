import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-alert',
  template: `
    <h2> Esta seguro de eliminar  <span class="text-primary"> {{ data.title ?? 'Este elemento' }} </span>? </h2>
    
    <h4>
        {{ data.subtitle ?? 'Tenga en cuenta que se hará la eliminacion de manera permante del registro y no se podrá recuperar la información.' }}
    </h4>
    
    <div class="flex items-center justify-end pt-10">
        <button mat-button (click)="onNoDelete()">
            <mat-icon svgIcon="close" ></mat-icon>
            Cancelar
        </button>
        <button (click)="delete()" class="px-6 ml-3" mat-flat-button [color]="'primary'">
            <!-- <mat-icon svgIcon="delete" ></mat-icon> -->
            Eliminar
        </button>
    </div>
  `,
  styles: [
  ]
})
export class DeleteAlertComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, subtitle: string }
  ) { }

  ngOnInit(): void {
  }

  public onNoDelete(): void {
    this.dialogRef.close(false);
  }

  public delete(): void {
    this.dialogRef.close(true);
  }

}
