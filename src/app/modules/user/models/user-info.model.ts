export class UserInfo {

    constructor(private id: number, private fullname: string, private email: string) { }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getFullname(): string {
        return this.fullname;
    }

    public setFullname(fullname: string): void {
        this.fullname = fullname;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

}