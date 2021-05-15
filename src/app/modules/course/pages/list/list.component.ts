import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAlertComponent } from 'app/shared/delete-alert/delete-alert.component';
import { RowAppButtonModel } from 'app/shared/row-buttons/models/row-nutton.model';
import { AppNotificationsService } from 'app/shared/Services/app-notifications.service';
import { Course } from '../../models/course.interface';
import { CoursesService } from '../../services/courses.service';
import { CourseListTableModel } from '../../view-models/list-table.model';
import { CourseListComponentModel } from '../../view-models/list_component.model';
import config from 'assets/language/es/measured-unit.json';
import { CourseRegisterComponent } from '../../components/course-register/course-register.component';
import { CourseEditComponent } from '../../components/course-edit/course-edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public model: CourseListComponentModel;
  public tableModel: CourseListTableModel;
  public courseList: Course[];

  registerButton: RowAppButtonModel[] = [];

  constructor(
    private dialog: MatDialog,
    private _appNotifications: AppNotificationsService,
    private _course: CoursesService
  ) {
    this.setPageModels();
  }

  ngOnInit(): void {
    this.getList();
  }

  public register() {
    const dialogRef = this.dialog.open(CourseRegisterComponent, {
      width: '650px',
      height: '520px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.getList();
    });
  }

  private setPageModels() {
    this.model = CourseListComponentModel.fromJson(config.list_component);
    this.registerButton.push(this.model.registerButton);
    this.tableModel = CourseListTableModel.fromJson(config.list_table);
    this.model.title = "Cursos";
    this.model.module = "Administración";
    this.tableModel.tableLabels = ["code", "name", "options"];
  }

  private getList(): void {
    this._course.getCourseList().subscribe(list => {
      this.courseList = list;
    });
  }

  editar(event: any) {
    const dialogRef = this.dialog.open(CourseEditComponent, {
      width: '650px',
      height: '520px',
      data: event
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.getList();
    });
  }

  public validationToDeleteCourse(course: Course): void {
    const dialogRef = this.dialog.open(DeleteAlertComponent, {
      width: '600px',
      height: '400px',
      data: { title: `el curso ${course.name}` }
    });

    dialogRef.afterClosed().subscribe(result => result ? this.deleteCourse(course.id) : null);
  }

  private deleteCourse(id: number): void {
    this._course.delete(id).subscribe(resp => {
      this._appNotifications.deleteSuccess(null, resp.message);
      this.getList();
    });
  }
}
