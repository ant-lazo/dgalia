
export interface User {
    fullname: string;
    email: string;
    password: string;
    rolId: number;
    contact: Contact;
  }

export interface Contact {
    email : string,
    phone : string,
    address : string,
    district : string,
    province : string,
    departament : string,
    document : string,
    documentTypeId : number
}
  