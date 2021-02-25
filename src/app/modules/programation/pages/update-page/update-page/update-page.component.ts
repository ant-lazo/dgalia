import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectRecipesComponent } from 'app/modules/programation/components/select-recipes/select-recipes.component';
import { RegisterPageComponentHelper } from 'app/modules/programation/helpers/register-page.helper';
import { CookingScheduleRecipe } from 'app/modules/programation/models/cooking-schedule-recipe..model';
import { CookingSchedule } from 'app/modules/programation/models/cooking-schedule.model';
import { CookingScheduleService } from 'app/modules/programation/services/cooking-schedule.service';
import { RowAppButtonModel } from 'app/shared/row-buttons/models/row-nutton.model';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.scss']
})
export class UpdatePageComponent implements OnInit {

  public cookingSchedule: CookingSchedule;
  public recipesSelected: CookingScheduleRecipe[] = [];
  public buttonsList: RowAppButtonModel[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cookingschedule: CookingScheduleService,
    private _router: Router,
    private _matDialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.setCookingSchedule();
    this.buttonsList = RegisterPageComponentHelper.getPageUpdateButtons();
  }

  private get id(): string {
    return this._activatedRoute.snapshot.params.id;
  }

  public applyButtonEvent(action: string): void {
    switch (action) {
      case 'add-recipes':
        this.openSelectRecipesModal();
        break;
      case 'cancel':
        this.goBack();
        break;
      case 'register':
        this.validateDatatuUpdate();
        break;
      default:
        break;
    }
  }

  private openSelectRecipesModal() {
    const dialogRef = this._matDialog.open(SelectRecipesComponent, {
      width: '900px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recipesSelected = result;
      }
    });
  }

  private goBack() {
    this._router.navigate(['programacion/listado']);
  }

  public validateDatatuUpdate(): void {

  }


  private setCookingSchedule(): void {
    this._cookingschedule.getById(this.id).subscribe((result: CookingSchedule) => {
      this.cookingSchedule = result;
    });
  }

}
