import { CourseListTableModel } from "./list-table.model";

export class CourseListPageModel {


    module: string;
    title: string;
    List: CourseListTableModel;

    constructor($module: string, $title: string, $List: CourseListTableModel) {
        this.module = $module;
        this.title = $title;
        this.List = $List;
    }
}