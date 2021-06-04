import { UserInfo } from "app/modules/user/models/user-info.model";

export class Warehouse {

    private id: number;
    private code: string;
    private name: string;
    private description: string;
    private location: string;
    private headquarterId: number;
    private headquarterName: string;
    private responsable: string;
    private createdAt: Date;
    private updatedAt: null;
    private createdby: UserInfo;
    private enabled: boolean;

    constructor(
        id: number,
        code: string,
        name: string,
        description: string,
        location: string,
        headquarterId: number,
        headquarterName: string,
        responsable: string,
        createdAt: Date,
        updatedAt: null,
        createdby: UserInfo,
        enabled: boolean
    ) {
        this.id = id
        this.code = code
        this.name = name
        this.description = description
        this.location = location
        this.headquarterId = headquarterId
        this.headquarterName = headquarterName
        this.responsable = responsable
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.createdby = createdby
        this.enabled = enabled
    }

    public getId(): number {
        return this.id;
    }

    public getCode(): string {
        return this.code;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getLocation(): string {
        return this.location;
    }

    public getHeadquarterId(): number {
        return this.headquarterId;
    }

    public getHeadquarterName(): string {
        return this.headquarterName;
    }

    public getResponsable(): string {
        return this.responsable;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public getUpdatedAt(): null {
        return this.updatedAt;
    }

    public getCreatedby(): UserInfo {
        return this.createdby;
    }

    public isEnabled(): boolean {
        return this.enabled;
    }

}