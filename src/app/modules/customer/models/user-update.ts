import { Contact } from '../models/user-register';

export interface UserUpdate  {
    id: number;
    fullname: string;
    password: string;
    email: string;
    contact: Contact;
} 
