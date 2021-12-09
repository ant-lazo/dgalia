import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SelectDateComponent } from '../../components/select-date/select-date.component';
import { CookingScheduleService } from '../../services/cooking-schedule.service';
import { CookingSchedule } from '../../models/cooking-schedule.model';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {

  public schelude: CookingSchedule[]

  constructor(
    private _router: Router,
    private dialog: MatDialog,
    private _cookingSchedule: CookingScheduleService
  ) { }

  ngOnInit(): void {
    //this.obtenerDataCooking();
  }

  selectDate(){
    const dialogRef = this.dialog.open(SelectDateComponent, {
      width: '620px',
      height: '300px',
  });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.listado(result);
    });

  }

  listado(rango?:any){
    this._router.navigate(['programacion/listado/'+rango.start+'/'+rango.end]);
  }

  obtenerDataCooking() : void {
    this._cookingSchedule.getAll().subscribe( a =>{
      this.schelude =a
      //this.iterar();
    })
  }
}
