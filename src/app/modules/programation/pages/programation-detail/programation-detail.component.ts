import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookingScheduleService } from '../../services/cooking-schedule.service';
import { CookingSchedule } from '../../models/cooking-schedule.model';
import { Observable } from 'rxjs';
import { RowAppButtonModel, RowButtonType } from 'app/shared/row-buttons/models/row-nutton.model';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAlertComponent } from 'app/shared/delete-alert/delete-alert.component';
import { ToastrService } from 'ngx-toastr';
import { CookingScheduleUpdateForm } from '../../models/update-form.model';

@Component({
  selector: 'app-programation-detail',
  templateUrl: './programation-detail.component.html',
  styleUrls: ['./programation-detail.component.scss']
})
export class ProgramationDetailComponent implements OnInit {

  public cookingSchedule: Observable<CookingSchedule>;
  public buttonsList = []

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cookingSchedule: CookingScheduleService,
    private _router: Router,
    private _dialog: MatDialog,
    private _toast: ToastrService
  ) { 
    this.buttonsList = this.setRowOffButtons();
  }

  ngOnInit(): void {
    this.cookingSchedule = this._cookingSchedule.getById(this.cookingScheduleId);
  }

  public get cookingScheduleId(): string {
    return this._activatedRoute.snapshot.params.id;
  }

  public applyButtonEvent(action: string, programation: CookingSchedule): void {

    switch (action) {
      case 'delete':
        this.validationToDeleteProgramation(programation);
        break;
      case 'edit':
        this.redirectToEditPage();
        break;
      default:
        break;
    }
  }

  public validationToDeleteProgramation(programation: CookingSchedule): void {
    const dialogRef = this._dialog.open(DeleteAlertComponent, {
      width: '650px',
      height: '450px',
      data: { title: `la programación ${programation.description}` }
    });

    dialogRef.afterClosed().subscribe(result => result ? this.deleteProgramation(programation.id) : null);
  }

  private deleteProgramation(id: number): void {
    this._cookingSchedule.delete(id).subscribe(resp => {
      this._toast.success(null, 'Programación eliminada');
      this.redirectToCalendar();
    });
  }

  private redirectToEditPage(): void {
    this._router.navigate(['/programacion/editar', this.cookingScheduleId])
  }

  private redirectToCalendar(): void {
    this._router.navigate(['/programacion/calendario']);
  }

  public setRowOffButtons(): RowAppButtonModel[] {
    return [
      new RowAppButtonModel({
        action: 'delete',
        color: 'primary',
        icon: 'delete',
        label: 'Eliminar',
        type: RowButtonType.Stroked
      }),
      new RowAppButtonModel({
        action: 'edit',
        color: 'secondary',
        icon: 'library_add',
        label: 'Editar ',
        type: RowButtonType.Stroked
      }),
    ]
  }


}
