export class UserInfo {

    public id: number;
    public fullname: string;
    public email: string;

    constructor(id: number, fullname: string, email: string) {
        this.id = id;
        this.fullname = fullname;
        this.email = email;
    }

}