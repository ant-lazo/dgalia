import { environment } from "environments/environment"

export class ApiRoutes {

    public static baseUrl: string = environment.apiUrl;

    public static warehouse = {
        getList: `${environment.apiUrl}warehouse`,
        findByCode: (code: string): string => `${environment.apiUrl}warehouse?code=${code}`,
    }
}