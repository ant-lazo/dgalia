export class RowAppButtonModel {
    label: string;
    color: string;
    type: RowButtonType;
    action: string;
    icon: string


    constructor(body: { label: string, color: string, type: RowButtonType, action: string, icon: string }) {
        this.label = body.label;
        this.color = body.color;
        this.type = body.type;
        this.action = body.action;
        this.icon = body.icon
    }


    public static fromJson(json: any): RowAppButtonModel {
        return new RowAppButtonModel({
            label: json.label,
            color: json.color,
            type: json.type,
            action: json.action,
            icon: json.icon,
        })
    }


}

export enum RowButtonType {
    Stroked = 'Stroked',
    Default = 'Default',
    Flat = 'Flat',
    Icon = 'Icon',
    MiniFab = 'MiniFab',
    Raised = 'Raised'
}