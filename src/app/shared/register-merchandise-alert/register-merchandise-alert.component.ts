import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InventoryService } from 'app/modules/inventory/services/inventory.service';
import { AppNotificationsService } from '../Services/app-notifications.service';

@Component({
  selector: 'app-registerMerchandise-alert',
  template: `
    <h2> Esta seguro de retirar  <span class="text-primary"> {{ data?.cooking_schedule_code ?? 'Este elemento' }} </span>? </h2>
    
    <h4>
        <!-- {{ datashedule?.subtitle ?? 'Tenga en cuenta que se hará la eliminación de manera permante del registro y no se podrá recuperar la información.' }}-->
        {{ 'Tenga en cuenta que al realizar el retiro de la programación, se eliminará de manera permante del registro y no se podrá recuperar la información.' }}
      </h4>
    
    <div class="flex items-center justify-end pt-10">
        <button mat-button (click)="onNoDelete()">
            <mat-icon>close</mat-icon>
            Cancelar
        </button>
        <button (click)="removeMerchandise(data.cooking_schedule_code, data.createdById)" class="px-6 ml-3" mat-flat-button color="primary">
            <!--<mat-icon svgIcon="delete" ></mat-icon>-->
            <mat-icon>input</mat-icon>Retirar Mercaderia
        </button>
    </div>
  `,
  styles: [
  ]
})
export class RegisterMerchandiseAlertComponent implements OnInit {

  datasend: any;

  constructor(
    private dialogRef: MatDialogRef<RegisterMerchandiseAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { cooking_schedule_code: string, createdById: number },
    private _inventory: InventoryService,
    private _appNotifications: AppNotificationsService,
  ) { 
    
  }

  ngOnInit(): void {
    //console.log("el que viene: ",this.dataschedule)
  }

  public onNoDelete(): void {
    this.dialogRef.close(false);
  }

  public removeMerchandise(cooking_schedule_code: string, createdById: number): void {
    //this.dialogRef.close(true);
    this.datasend={cooking_schedule_code,createdById};
    console.log("datos para enviar", this.datasend)
    this._inventory.postRemoveMerchandise(this.datasend).subscribe(() => {
      this._appNotifications.removeMerchandiseSuccess();
      this.dialogRef.close(false);
    });


  }

}