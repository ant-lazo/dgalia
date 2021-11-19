
export interface User {
  id: number;
  fullname: string;
  email: string;
  password: string;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
  rol: Rol;
  contact: Contact;
}

export interface Rol{
  id: number;
  code: string;
  name: string;
  description: string;
}

export interface Contact{
  id: number;
  email: string;
  phone: string;
  address: string;
  district: string;
  province: string;
  departament: string;
  webSite: string;
  document: string;
  documentType: DocumentType;
}

export interface DocumentType{
  id:number;
  code:string;
  name: string;
  description: string;
}

