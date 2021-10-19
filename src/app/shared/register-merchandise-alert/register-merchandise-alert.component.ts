import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-registerMerchandise-alert',
  template: `
    <h2> Esta seguro de retirar  <span class="text-primary"> {{ dataschedule?.code ?? 'Este elemento' }} </span>? </h2>
    
    <h4>
        <!-- {{ datashedule?.subtitle ?? 'Tenga en cuenta que se hará la eliminacion de manera permante del registro y no se podrá recuperar la información.' }}-->
        {{ 'Tenga en cuenta que al realizar el retiro de la programación, se eliminará de manera permante del registro y no se podrá recuperar la información.' }}
      </h4>
    
    <div class="flex items-center justify-end pt-10">
        <button mat-button (click)="onNoDelete()">
            <mat-icon>close</mat-icon>
            Cancelar
        </button>
        <button (click)="delete()" class="px-6 ml-3" mat-flat-button color="primary">
            <!--<mat-icon svgIcon="delete" ></mat-icon>-->
            <mat-icon>input</mat-icon>Retirar Mercaderia
        </button>
    </div>
  `,
  styles: [
  ]
})
export class RegisterMerchandiseAlertComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<RegisterMerchandiseAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public dataschedule: { code: string, createdById: number }
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