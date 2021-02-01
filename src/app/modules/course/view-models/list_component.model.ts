import { RowAppButtonModel } from '../../../shared/row-buttons/models/row-nutton.model';

export class CourseListComponentModel {
    module: string;
    title: string;
    registerButton: RowAppButtonModel

    constructor($module: string, $title: string, registerButton: RowAppButtonModel) {
        this.module = $module;
        this.title = $title;
        this.registerButton = registerButton;
    }

    public static fromJson(json: any): CourseListComponentModel {
        return new CourseListComponentModel(json.module, json.title, RowAppButtonModel.fromJson(json.register_button));
    }

} 