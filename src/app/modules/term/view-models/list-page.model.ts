import { TermListTableModel } from "./list-table.model";

export class TermListPageModel {


    module: string;
    title: string;
    List: TermListTableModel;

    constructor($module: string, $title: string, $List: TermListTableModel) {
        this.module = $module;
        this.title = $title;
        this.List = $List;
    }
}