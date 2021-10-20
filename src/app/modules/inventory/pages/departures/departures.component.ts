import { Component, OnInit } from '@angular/core';
import { CookingScheduleService } from 'app/modules/programation/services/cooking-schedule.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
//import { RegisterMerchandiseAlertComponent } from 'app/shared/registerMerchandise-alert/registerMerchandise-alert.component';
import { RegisterMerchandiseAlertComponent } from 'app/shared/register-merchandise-alert/register-merchandise-alert.component';
import { RowAppButtonModel, RowButtonType } from 'app/shared/row-buttons/models/row-nutton.model';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.scss']
})
export class DeparturesComponent implements OnInit {

  public request: Observable<any[]>;
  public registerButton: RowAppButtonModel[];

  constructor(
    private _cookingSchedule: CookingScheduleService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    //{{dgalliaUrl}}api/v1/cooking-schedule
    //se añadio para ver si se colocan los estilos
    this.buildRegisterButton();
    this.request = this._cookingSchedule.getAll(); 
    console.log("{{dgalliaUrl}}api/v1/cooking-schedule: ",this.request)
  }

  public validationToRegisterMerchandise(schedule: any): void {
    const dialogRef = this.dialog.open(RegisterMerchandiseAlertComponent, {
      width: '600px',
      height: '400px',
      /*data: { title: `La programación: ${schedule.code}` }*/
      data: { cooking_schedule_code: `${schedule.code}`, createdById: `${schedule.createdBy.id}` }
    });

    dialogRef.afterClosed().subscribe(result => result ? this.registerMerchandise(schedule.code) : null);
  }

  public registerMerchandise(code: string){

  }

  public buildRegisterButton(): void {
    this.registerButton = [
      new RowAppButtonModel({
        action: 'register',
        color: 'primary',
        icon: 'save',
        label: 'Registrar',
        type: RowButtonType.Stroked
      }),
    ];
  }

}
