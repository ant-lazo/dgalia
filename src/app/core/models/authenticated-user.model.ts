export class AuthenticatedUser {



    private id: number;
    private name: string;
    private email: string;
    private rolId: string;
    private rolName: string;

    constructor(body: { id: number, name: string, email: string, rolId: string, rolName: string }) {
        this.id = body.id;
        this.name = body.name;
        this.email = body.email;
        this.rolId = body.rolId;
        this.rolName = body.rolName;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getRolId(): string {
        return this.rolId;
    }

    public getRolName(): string {
        return this.rolName;
    }


    public static fromJson(json: any): AuthenticatedUser {
        return new AuthenticatedUser({
            id: json.id,
            email: json.email,
            name: json.name,
            rolId: json.rol_id,
            rolName: json.rol_name
        });
    }
}