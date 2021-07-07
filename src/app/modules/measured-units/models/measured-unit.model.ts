export class MeasuredUnit {
    id: number;
    code: string;
    name: string;
    enabled: boolean;

    constructor(body: { id: number, code: string, name: string, enabled: boolean }) {
        this.id = body.id;
        this.code = body.code;
        this.name = body.name;
        this.enabled = body.enabled;
    }


    public static fromListFromJson(json: any[]): MeasuredUnit[] {
        const list: MeasuredUnit[] = [];
        for (const item of json) {
            list.push(new MeasuredUnit({
                id: item.id,
                code: item.code,
                name: item.name,
                enabled: item.enabled
            }))
        }
        return list;
    }
}