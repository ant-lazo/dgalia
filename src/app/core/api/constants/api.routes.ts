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
    }
}