import { Request } from 'express';

export type User = {
    ID: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    orders: Order[];
}

export type Order = {
    ID: string;
    user: string;
    status: OrderStatus
}

export type Product = {
    ID : string;
    name: string;
    price: number;
    category: string;
}

export type CustomRequest = Request & 
{ 
    user: User, 
    tenant?: string 
};

export enum OrderStatus {
    Active = 'Active',
    Complete = 'Completed',
    Canceled = 'Canceled',
    InProcess = 'In-Process',
    New = 'New'
}