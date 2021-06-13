import { DocumentType } from 'app/modules/document-types/models/document-type';
import { Headquarter } from 'app/modules/headquarter/models/headquarter.model';
import { ProductCategory } from 'app/modules/product-category/models/product-category.interface';
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
    id: number;
    headquarter: Headquarter;
    productCategory: ProductCategory;
}

