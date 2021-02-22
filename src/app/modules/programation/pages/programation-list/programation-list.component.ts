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

  public model: any;
  public start: Date;
  public end: Date;
  public programationList: any[] = [];
  public programationFilteredList: any[] = [];

  constructor(
    private _programation: CookingScheduleService,
    private _router: Router,
    private dialog: MatDialog,
    private _appNotifications: AppNotificationsService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.model = { title: "Lista programaciones", module: "Cocina" };
    this.setDates();
  }

  ngOnInit(): void {
    if (this.start && this.end) {
      this.setProgramationList(this.start, this.end);
    } else {
      this.setProgramationList();
    }
  }


  public validationToDeleteProgramation(programation: CookingSchedule): void {
    const dialogRef = this.dialog.open(DeleteAlertComponent, {
      width: '650px',
      height: '500px',
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

  setProgramationList(start?: Date, end?: Date) {
    if (start != null && end != null) {
      this._programation.getByRange(start, end).subscribe(programations => {
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

  public editar(event: CookingSchedule): void {
    this._router.navigate(['programacion/editar/' + event.id]);
  }

  public detalle(event: CookingSchedule): void {
    this._router.navigate(['programacion/detalle/' + event.id]);
  }

  private setDates(): void {
    if (this._activatedRoute.snapshot.paramMap.get('start') && this._activatedRoute.snapshot.paramMap.get('end')) {
      this.start = new Date(Number(this._activatedRoute.snapshot.paramMap.get('start').toString()));
      this.end = new Date(Number(this._activatedRoute.snapshot.paramMap.get('end').toString()));
    }
  }
}
