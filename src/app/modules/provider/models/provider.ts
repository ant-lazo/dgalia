import { UserInfo } from 'app/modules/user/models/user-info.model';

export interface Provider {
    code: string;
    legalName: string;
    commercialName: string;
    document: string;
    location: string;
    documentType: DocumentType;
    phone: string;
    heading: string;
    contactNames: string;
    enabled: boolean;
    comments: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: UserInfo;
    updatedBy: UserInfo;
}


interface DocumentType {
    id: number;
    code: string;
    name: string;
    description: string;
}
