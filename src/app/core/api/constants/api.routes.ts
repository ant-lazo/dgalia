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
        getResume: (id: number): string => `${environment.apiUrl}cooking-schedule/resumen?id=${id}`,
    }

    public static demandSheet = {
        save: `${environment.apiUrl}demand-sheet`,
    }
}