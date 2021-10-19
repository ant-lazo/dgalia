import { Component, OnInit } from '@angular/core';
import { CookingScheduleService } from 'app/modules/programation/services/cooking-schedule.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { RegisterMerchandiseAlertComponent } from 'app/shared/registerMerchandise-alert/registerMerchandise-alert.component';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.scss']
})
export class DeparturesComponent implements OnInit {

  public request: Observable<any[]>;

  constructor(
    private _cookingSchedule: CookingScheduleService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    //{{dgalliaUrl}}api/v1/cooking-schedule
    this.request = this._cookingSchedule.getAll(); 
    console.log("{{dgalliaUrl}}api/v1/cooking-schedule: ",this.request)
  }

  public validationToRegisterMerchandise(supply: any): void {
    const dialogRef = this.dialog.open(RegisterMerchandiseAlertComponent, {
      width: '600px',
      height: '400px',
      data: { title: `la Sub receta ${supply.name}` }
    });

    dialogRef.afterClosed().subscribe(result => result ? this.registerMerchandise(supply.id) : null);
  }

  public registerMerchandise(id: number){

  }

}
