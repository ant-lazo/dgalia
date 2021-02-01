import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from '../../../course/services/courses.service';
import { TermsService } from '../../../term/services/terms.service';
import { forkJoin } from 'rxjs';
import { Course } from 'app/modules/course/models/course.interface';
import { Term } from 'app/modules/term/models/term.interface';
import { ClassesService } from '../../../classes/services/classes.service';
import { Class } from 'app/modules/classes/models/class.model';
import { RowAppButtonModel } from '../../../../shared/row-buttons/models/row-nutton.model';
import { RegisterPageComponentHelper } from '../../helpers/register-page.helper';
import { MatDialog } from '@angular/material/dialog';
import { SelectRecipesComponent } from '../../components/select-recipes/select-recipes.component';
import { CookingScheduleRecipe } from '../../models/cooking-schedule-recipe..model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CookingScheduleService } from '../../services/cooking-schedule.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public cookingScheduleForm: FormGroup;

  public courseList: Course[] = [];
  public termList: Term[] = [];
  public classList: Class[] = [];

  public classesSelected: Class[] = [];
  public coursesSelected: Course[] = [];
  public buttonsList: RowAppButtonModel[] = [];
  public recipesSelected: CookingScheduleRecipe[] = [];

  constructor(
    private _builder: FormBuilder,
    private _courses: CoursesService,
    private _terms: TermsService,
    private _classes: ClassesService,
    private _matDialog: MatDialog,
    private _router: Router,
    private _toast: ToastrService,
    private _cookingSchedule: CookingScheduleService
  ) {
    this.setForm();
  }


  ngOnInit(): void {
    this.setRequiredLists();
    this.buttonsList = RegisterPageComponentHelper.getPageButtons();
  }

  public setClass(classSelected: Class): void {
    const founded = this.classesSelected.find(e => e.id === classSelected.id);
    if (!founded) {
      this.classesSelected.push(classSelected);
      this.cookingScheduleForm.controls.classes.setValue(null);
    }
  }

  public deleteClass(index: number): void {
    this.classesSelected.splice(index, 1);
  }

  public setCourses(courseSelected: Class): void {
    const founded = this.coursesSelected.find(e => e.id === courseSelected.id);
    if (!founded) {
      this.coursesSelected.push(courseSelected);
      this.cookingScheduleForm.controls.courses.setValue(null);
    }
  }

  public deleteCourse(index: number): void {
    this.coursesSelected.splice(index, 1);
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
        this.validateDataToRegister();
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


  private setRequiredLists() {
    forkJoin([
      this._courses.getCourseList(),
      this._classes.getList(),
      this._terms.getCompleteList(),
    ]).subscribe(result => {
      this.courseList = result[0];
      this.classList = result[1];
      this.termList = result[2];
    });
  }

  public validateDataToRegister(): void {

    if (this.cookingScheduleForm.invalid) {
      this._toast.error('Debe completar el formulario', 'formulario no válido');
      return
    }

    if (!RegisterPageComponentHelper.validations({
      classes: this.classesSelected,
      courses: this.coursesSelected,
      recipes: this.recipesSelected,
      toast: this._toast
    })) return;


    const form = RegisterPageComponentHelper.getCookingScheduleRegisterForm({
      classes: this.classesSelected,
      courses: this.coursesSelected,
      form: this.cookingScheduleForm.value,
      recipes: this.recipesSelected,
    });

    this._cookingSchedule.register(form).subscribe(resp => {
      this._toast.success(resp.message, 'Registro exitoso');
      this.goBack();
    });

  }


  private goBack() {
    this._router.navigate(['programacion/pagina-inicial']);
  }


  private setForm() {
    this.cookingScheduleForm = this._builder.group({
      note: [null, Validators.required],
      description: [null, Validators.required],
      date: [null, Validators.required],
      recipes: [null],
      courses: [null],
      classes: [null],
      term_id: [null, Validators.required]
    });
  }

}
