import { TableItem } from "./list-table-item.model";

export class MeasuredUnitListTableModel {
    tableLabels: string[];
    items: TableItem[];
    defaultImage: string;
    deleteIcon: string;
    updateIcon: string;

    constructor(body: {
        tableLabels: string[], items: TableItem[], defaultImage: string, deleteIcon: string,
        updateIcon: string
    }) {
        this.tableLabels = body.tableLabels;
        this.items = body.items;
        this.defaultImage = body.defaultImage;
        this.deleteIcon = body.deleteIcon,
            this.updateIcon = body.updateIcon
    }

    public static fromJson(json: any) {
        return new MeasuredUnitListTableModel({
            items: TableItem.getJsonList(json.items),
            tableLabels: json.table_labels,
            defaultImage: json.default_url_image,
            deleteIcon: json.delete_icon,
            updateIcon: json.update_icon
        })
    }

}
