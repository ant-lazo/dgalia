import { HeadquarterListTableModel } from "./list-table.model";

export class HeadquarterListPageModel {


    module: string;
    title: string;
    List: HeadquarterListTableModel;

    constructor($module: string, $title: string, $List: HeadquarterListTableModel) {
        this.module = $module;
        this.title = $title;
        this.List = $List;
    }
}