import { Component, OnInit , Inject} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MeasuredUnit } from "app/modules/measured-units/models/measured-unit.model";
import { ProductCategory } from "app/modules/product-category/models/product-category.interface";
import { Term } from "app/modules/term/models/term.interface";
import { TermsService } from "app/modules/term/services/terms.service";
import { AppNotificationsService } from "app/shared/Services/app-notifications.service";
import { Observable } from 'rxjs';
import { Course } from "../../models/course.interface";
import { CoursesService } from "../../services/courses.service";

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {

  public editForm: FormGroup;
  private id:Number;
  public termList: Observable<Term[]>;

  constructor(
    private matDialogRef: MatDialogRef<CourseEditComponent>,
    private _appNotifications: AppNotificationsService,
    private formBuilder: FormBuilder,
    private _course: CoursesService,
    private _term: TermsService,
    @Inject(MAT_DIALOG_DATA) public data: Course
    ) {
    this.setForm(this.data);
  }

  ngOnInit(): void {
    this.termList = this._term.getCompleteList();
  }

  public onNoCreate() {
    this.matDialogRef.close();
  }

  public formValidation(): void {
    if (this.editForm.valid) {
      this.editCourse(this.editForm.value);
      return;
    }
  }

  private editCourse(data: any): void {
    data.id = this.id;
    this._course.editCourse(data).subscribe(() => {
      this._appNotifications.editSuccess();
      this.matDialogRef.close(true);
    });
  }

  private setForm(data:Course) {
    this.editForm = this.formBuilder.group({
      term_id: [data.term.id, Validators.required],
      description: [data.description, Validators.required],
      name: [data.name, Validators.required],
    });
    this.id = data.id;
  }

}
