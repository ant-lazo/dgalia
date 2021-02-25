import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Class } from 'app/modules/classes/models/class.model';
import { ClassesService } from 'app/modules/classes/services/classes.service';
import { Course } from 'app/modules/course/models/course.interface';
import { CoursesService } from 'app/modules/course/services/courses.service';
import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { HeadquartesService } from 'app/modules/headquarter/services/headquartes.service';
import { CookingSchedule } from 'app/modules/programation/models/cooking-schedule.model';
import { Term } from 'app/modules/term/models/term.interface';
import { TermsService } from 'app/modules/term/services/terms.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'update-cooking-schedule-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {

  @Input() cookingSchedule: CookingSchedule;

  public updateForm: FormGroup;
  public courseList: Course[] = [];
  public termList: Term[] = [];
  public classList: Class[] = [];
  public headquarterList: Headquarter[] = [];

  public classesSelected: Class[] = [];
  public coursesSelected: Course[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _courses: CoursesService,
    private _terms: TermsService,
    private _classes: ClassesService,
    private _headquarterService: HeadquartesService
  ) {
    this.setForm();
  }

  ngOnInit(): void {
    this.setRequiredLists();
  }

  private setRequiredLists() {
    forkJoin([
      this._courses.getCourseList(),
      this._classes.getList(),
      this._terms.getCompleteList(),
      this._headquarterService.getCompleteList()
    ]).subscribe(result => {
      this.courseList = result[0];
      this.classList = result[1];
      this.termList = result[2];
      this.headquarterList = result[3];
      this.setCookingScheduleCoursesAndClasses();
      this.setForm();

    });
  }

  public setClass(classSelected: Class): void {
    const founded = this.classesSelected.find(e => e.id === classSelected.id);
    if (!founded) {
      this.classesSelected.push(classSelected);
      this.updateForm.controls.classes.setValue(null);
    }
  }

  public setCourses(courseSelected: Class): void {
    const founded = this.coursesSelected.find(e => e.id === courseSelected.id);
    if (!founded) {
      this.coursesSelected.push(courseSelected);
      this.updateForm.controls.courses.setValue(null);
    }
  }

  public setCookingScheduleCoursesAndClasses(): void {
    for (const appClass of this.cookingSchedule.classes) {
      const classFounded = this.classList.find(c => c.id === appClass.id);
      this.classesSelected.push(classFounded);
    }

    for (const course of this.cookingSchedule.course) {
      const courseFounded = this.courseList.find(c => c.id === course.id)
      this.coursesSelected.push(courseFounded);
    }
  }

  public deleteClass(index: number): void {
    this.classesSelected.splice(index, 1);
  }

  public deleteCourse(index: number): void {
    this.coursesSelected.splice(index, 1);
  }

  private setForm(): void {
    this.updateForm = this._formBuilder.group({
      id: [this.cookingSchedule?.id ?? null],
      note: [this.cookingSchedule?.note ?? null],
      description: [this.cookingSchedule?.description ?? null],
      date: [new Date(this.cookingSchedule?.completeDate || new Date() ) ],
      recipes: [null],
      courses: [null],
      classes: [null],
      term_id: [this.cookingSchedule?.term?.id ?? null],
      headquarter_id: [this.cookingSchedule?.headquarter?.id ?? null],
    });
  }

}

