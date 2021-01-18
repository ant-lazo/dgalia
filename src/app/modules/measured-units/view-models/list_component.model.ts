import { RowAppButtonModel } from '../../../shared/row-buttons/models/row-nutton.model';
export class MeasuredunitListComponentModel {
    module: string;
    title: string;
    registerButton: RowAppButtonModel

    constructor($module: string, $title: string, registerButton: RowAppButtonModel) {
        this.module = $module;
        this.title = $title;
        this.registerButton = registerButton;
    }

    public static fromJson(json: any): MeasuredunitListComponentModel {
        return new MeasuredunitListComponentModel(json.module, json.title, RowAppButtonModel.fromJson(json.register_button));
    }

} 