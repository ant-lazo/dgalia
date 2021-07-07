import { RowAppButtonModel } from '../../../shared/row-buttons/models/row-nutton.model';

export class TermListComponentModel {
    module: string;
    title: string;
    registerButton: RowAppButtonModel

    constructor($module: string, $title: string, registerButton: RowAppButtonModel) {
        this.module = $module;
        this.title = $title;
        this.registerButton = registerButton;
    }

    public static fromJson(json: any): TermListComponentModel {
        return new TermListComponentModel(json.module, json.title, RowAppButtonModel.fromJson(json.register_button));
    }

} 