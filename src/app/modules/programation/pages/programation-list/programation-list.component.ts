import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteAlertComponent } from 'app/shared/delete-alert/delete-alert.component';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { CookingScheduleService } from '../../services/cooking-schedule.service';
import { CookingSchedule } from '../../models/cooking-schedule.model';

@Component({
  selector: 'app-programation-list',
  templateUrl: './programation-list.component.html',
  styleUrls: ['./programation-list.component.scss']
})
export class ProgramationListComponent implements OnInit {
  model = {
    title:"Lista programaciones",
    module:"Cocina"
  }
  start:Date;
  end:Date;
  public programationList: any[] = [];
  public programationFilteredList: any[] = [];
  constructor(
    private _programation: CookingScheduleService,
    private _router: Router,
    private dialog: MatDialog,
    private _appNotifications: AppNotificationsService,
    route: ActivatedRoute
  ) {
    this.start = new Date(Number(route.snapshot.paramMap.get('start').toString()));
    console.log("🚀 ~ file: programation-list.component.ts ~ line 31 ~ ProgramationListComponent ~ this.start", this.start)
    this.end = new Date(Number(route.snapshot.paramMap.get('end').toString()));
    console.log("🚀 ~ file: programation-list.component.ts ~ line 33 ~ ProgramationListComponent ~ this.end", this.end)
  }

  ngOnInit(): void {
    if (this.start && this.end) {
      this.setProgramationList(this.start,this.end);
    } else {
      this.setProgramationList();
    }
  }


  public validationToDeleteProgramation(programation: CookingSchedule): void {
    const dialogRef = this.dialog.open(DeleteAlertComponent, {
      width: '600px',
      height: '400px',
      data: { title: `la programación ${programation.description}` }
    });

    dialogRef.afterClosed().subscribe(result => result ? this.deleteProgramation(programation.id) : null);
  }

  private deleteProgramation(id: number): void {
    this._programation.delete(id).subscribe(resp => {
      this._appNotifications.deleteSuccess(null, resp.message);
      this.setProgramationList();
    });
  }

  setProgramationList(start?: Date, end?: Date){
    if (start != null && end != null) {
      this._programation.getByRange(start,end).subscribe(programations => {
        this.programationFilteredList = programations;
        this.programationList = programations;
      })
    } else {
      this._programation.getAll().subscribe(programations => {
        this.programationFilteredList = programations;
        this.programationList = programations;
      })
    }

  }

  editar(event: any) {
    this._router.navigate(['programacion/editar/'+event.id]);
  }

  detalle(event: any) {
    this._router.navigate(['programacion/detalle/'+event.id]);
  }
}
