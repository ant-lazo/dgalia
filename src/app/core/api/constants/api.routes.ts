import { environment } from "environments/environment"

export class ApiRoutes {

    public static baseUrl: string = environment.apiUrl;

    public static warehouse = {
        getList: `${environment.apiUrl}warehouse`,
        findByCode: (code: string): string => `${environment.apiUrl}warehouse?code=${code}`,
        delete: (id: string): string => `${environment.apiUrl}warehouse?id=${id}`,
    }

    public static product = {
        getList: `${environment.apiUrl}product`,
        findByCode: (code: string): string => `${environment.apiUrl}product?code=${code}`,
        findBySupplyCode: (code: string): string => `${environment.apiUrl}product?supply_code=${code}`,
        delete: (code: string): string => `${environment.apiUrl}product?code=${code}`,
    }

    public static outputs = {
        save: `${environment.apiUrl}inventory/output`,
    }

    public static recipes = {
        findByName: (name: string): string => `${environment.apiUrl}recipe?name=${name}`,
    }

    public static cookingSchedule = {
        save: `${environment.apiUrl}cooking-schedule`,
        getResume: (code: string): string => `${environment.apiUrl}cooking-schedule/resumen?code=${code}`,
        findByCode: (code: string): string => `${environment.apiUrl}cooking-schedule?code=${code}`,
    }

    public static provider = {
        save: `${environment.apiUrl}provider`,
        update: `${environment.apiUrl}provider`,
        getAll: `${environment.apiUrl}provider`,
        findByCode: (code: string): string => `${environment.apiUrl}provider?code=${code}`,
    }

    public static documentType = {
        getAll: `${environment.apiUrl}document-type`,
    }

    public static inventory = {
        getStock: `${environment.apiUrl}inventory`,
        getProdutKardex: (code: string) => `${environment.apiUrl}inventory?product_code=${code}`,
    }

    public static purchaseOrder = {
        save: `${environment.apiUrl}purchase-order`,
        getAll: `${environment.apiUrl}purchase-order`,
        updateStatus: `${environment.apiUrl}purchase-order/status`,
        complete: `${environment.apiUrl}purchase-order/status?completed=true`,
        findByCode: (code: string): string => `${environment.apiUrl}purchase-order?code=${code}`,
        getNextCode: (demandSheetCode?: string): string => {
            let url: string = '';
            if (demandSheetCode != null || demandSheetCode != undefined) {
                url = `${environment.apiUrl}purchase-order/next-code?demand_sheet_code=${demandSheetCode}`;
            } else {
                url = `${environment.apiUrl}purchase-order/next-code`;
            }
            return url;
        },
    }

    public static demandSheet = {
        save: `${environment.apiUrl}demand-sheet`,
        findByCookingScheduleCode: (code: string): string => `${environment.apiUrl}demand-sheet/validate?cooking_schedule_code=${code}`,
        findByCode: (code: string): string => `${environment.apiUrl}demand-sheet?code=${code}`,
        deleteByCode: (code: string): string => `${environment.apiUrl}demand-sheet?code=${code}`,
    }
}