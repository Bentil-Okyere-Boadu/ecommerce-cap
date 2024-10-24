using { managed } from '@sap/cds/common';
namespace ecommerce;
// types
 type OrderStatus : String enum  {
    Active = 'Active';
    Complete = 'Completed';
    Canceled = 'Canceled';
    InProcess = 'In-Process';
    New = 'New';
}

type Roles: String enum {
    Admin = 'admin';
    Vendor = 'vendor';
    User = 'user';
}

// creating entities
entity Products: managed {
    key ID : UUID;
    name: String(100);
    price: Integer;
    category: String(40) null;
}

entity Users : managed {
    key ID: UUID;
    firstName: String(50);
    lastName: String(50);
    email: String @unique @mandatory;
    password: String @mandatory;
    role: Roles;
    orders: Association to many Orders on orders.user = $self;
}

entity Orders : managed  {
    key ID: UUID;
    user: Association to Users;
    status: OrderStatus;
}

entity Cart : managed {
    order: Association to Orders;
    product: Composition of many Products;
    quantity: Integer;
}

