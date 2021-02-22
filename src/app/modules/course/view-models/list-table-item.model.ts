
export class TableItem {
    columnDef: string;
    label: string;
    icon: string;

    constructor($columnDef: string, $label: string, $icon: string) {
        this.columnDef = $columnDef;
        this.label = $label;
        this.icon = $icon;
    }



    public static getJsonList(json: any[]): TableItem[] {
        const list: TableItem[] = [];
        for (const item of json) {
            list.push(new TableItem(item.column_def, item.label, item.icon))
        }
        return list;
    }
}