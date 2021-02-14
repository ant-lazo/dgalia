import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Term } from "app/modules/term/models/term.interface";
import { TermsService } from "app/modules/term/services/terms.service";
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { Observable } from "rxjs";
import { CoursesService } from "../../services/courses.service";

@Component({
  selector: 'app-course-register',
  templateUrl: './course-register.component.html',
  styleUrls: ['./course-register.component.scss']
})
export class CourseRegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public termList: Observable<Term[]>;

  constructor(
    private matDialogRef: MatDialogRef<CourseRegisterComponent>,
    private _appNotifications: AppNotificationsService,
    private formBuilder: FormBuilder,
    private _course: CoursesService,
    private _term: TermsService
  ) {
    this.setForm();
  }

  ngOnInit(): void {
    this.termList = this._term.getCompleteList();
  }

  public onNoCreate() {
    this.matDialogRef.close();
  }

  public formValidation(): void {
    if (this.registerForm.valid) {
      this.registerCourse(this.registerForm.value);
      return;
    }
  }

  private registerCourse(data: any): void {
    this._course.registerNewCourse(data).subscribe(() => {
      this._appNotifications.registerSuccess();
      this.matDialogRef.close(true);
    });

  }

  private setForm() {
    this.registerForm = this.formBuilder.group({
      term_id: [null, Validators.required],
      name: [null, Validators.required],
      description: [null, Validators.required]
    });
  }

}
