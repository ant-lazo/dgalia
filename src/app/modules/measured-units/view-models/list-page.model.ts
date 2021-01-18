import { MeasuredUnitListTableModel } from "./list-table.model";

export class MeasuredUnitListPageModel {


    module: string;
    title: string;
    List: MeasuredUnitListTableModel;

    constructor($module: string, $title: string, $List: MeasuredUnitListTableModel) {
        this.module = $module;
        this.title = $title;
        this.List = $List;
    }
}