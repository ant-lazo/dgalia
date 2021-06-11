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
        delete: (code: string): string => `${environment.apiUrl}product?code=${code}`,
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
        getAll: `${environment.apiUrl}provider`,
    }

    public static documentType = {
        getAll: `${environment.apiUrl}document-type`,
    }

    public static purchaseOrder = {
        getNextCode: `${environment.apiUrl}purchase-order/next-code`,
        save: `${environment.apiUrl}purchase-order`,
    }

    public static demandSheet = {
        save: `${environment.apiUrl}demand-sheet`,
        findByCookingScheduleCode: (code: string): string => `${environment.apiUrl}demand-sheet/validate?cooking_schedule_code=${code}`,
        findByCode: (code: string): string => `${environment.apiUrl}demand-sheet?code=${code}`,
        deleteByCode: (code: string): string => `${environment.apiUrl}demand-sheet?code=${code}`,
    }
}